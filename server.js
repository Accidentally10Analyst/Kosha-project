const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51RJr4KFMWgOLMP6IddCLEhxtqrne4Ew1qXp5ed7iNI5mzfy3Yvn79r9iufFqOFuyqAGUzRawR2M4iDWIroByga4c00D5qegErw'); // Replace with your Stripe secret key

const { createUpiPayment } = require('./juspay');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./kosha_cafe.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database');
    db.run(`CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      items TEXT,
      amount INTEGER,
      payment_intent_id TEXT,
      status TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Mock user data for sign-in
const mockUser = {
  email: "user@example.com",
  password: "password123",
  name: "User"
};

// POST /signin endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    res.json({ success: true, message: "Sign-in successful", name: mockUser.name });
  } else {
    res.status(401).json({ success: false, message: "Invalid email or password" });
  }
});

// POST /checkout endpoint - create Stripe payment intent and store order
app.post('/checkout', async (req, res) => {
  const { cartItems, paymentMethod, upiId } = req.body;
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ success: false, message: "Cart is empty" });
  }

  const amount = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) * 100; // amount in cents

  try {
    if (paymentMethod === 'UPI') {
      if (!upiId) {
        return res.status(400).json({ success: false, message: "UPI ID is required for UPI payments" });
      }
      // Create UPI payment via Juspay
      const orderId = `order_${Date.now()}`;
      const paymentResponse = await createUpiPayment(orderId, amount, upiId);

      const itemsJson = JSON.stringify(cartItems);

      db.run(`INSERT INTO orders (items, amount, payment_intent_id, status) VALUES (?, ?, ?, ?)`,
        [itemsJson, amount, paymentResponse.payment_id, 'pending'], function (err) {
          if (err) {
            console.error('Error inserting order', err.message);
            return res.status(500).json({ success: false, message: "Database error" });
          }
          res.json({ success: true, paymentUrl: paymentResponse.payment_url });
        });
    } else {
      // Default to Stripe card payment
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'inr',
        payment_method_types: ['card'],
      });

      const itemsJson = JSON.stringify(cartItems);

      db.run(`INSERT INTO orders (items, amount, payment_intent_id, status) VALUES (?, ?, ?, ?)`,
        [itemsJson, amount, paymentIntent.id, 'pending'], function (err) {
          if (err) {
            console.error('Error inserting order', err.message);
            return res.status(500).json({ success: false, message: "Database error" });
          }
          res.json({ success: true, clientSecret: paymentIntent.client_secret });
        });
    }
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ success: false, message: "Payment processing error" });
  }
});

// POST /contact endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  // Here you would normally save the message or send an email
  console.log("Contact message received:", { name, email, message });
  res.json({ success: true, message: "Message received. We'll get back to you soon." });
});

// Email OTP setup using nodemailer
const nodemailer = require('nodemailer');

// In-memory store for OTPs
const otpStore = new Map();

// Configure nodemailer transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pradeepfootballer10@gmail.com',
    pass: 'Pradeep143@',
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.error('Error with Gmail transporter:', error);
  } else {
    console.log('Gmail transporter is ready to send emails');
  }
});

// Helper function to generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST /request-otp endpoint
app.post('/request-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }
  const otp = generateOTP();
  otpStore.set(email, { otp, expiresAt: Date.now() + 5 * 60 * 1000 }); // expires in 5 minutes

  const mailOptions = {
    from: '"Kosha Cafe" <no-reply@kosha.com>',
    to: email,
    subject: 'Your Kosha Cafe OTP Code',
    text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`,
  };

  try {
    if (!transporter) {
      return res.status(500).json({ success: false, message: "Email transporter not ready" });
    }
    const info = await transporter.sendMail(mailOptions);
    console.log('OTP email sent:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    res.json({ success: true, message: "OTP sent successfully", previewUrl: nodemailer.getTestMessageUrl(info) });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ success: false, message: "Failed to send OTP email" });
  }
});

// POST /verify-otp endpoint
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email and OTP are required" });
  }
  const record = otpStore.get(email);
  if (!record) {
    return res.status(400).json({ success: false, message: "No OTP requested for this email" });
  }
  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    return res.status(400).json({ success: false, message: "OTP expired" });
  }
  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
  otpStore.delete(email);

  // Check if user exists in DB, if not insert
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    if (!row) {
      // Insert new user
      db.run('INSERT INTO users (email) VALUES (?)', [email], function (insertErr) {
        if (insertErr) {
          console.error('Error inserting user:', insertErr.message);
          return res.status(500).json({ success: false, message: "Database error" });
        }
        return res.json({ success: true, message: "OTP verified successfully", user: { id: this.lastID, email } });
      });
    } else {
      return res.json({ success: true, message: "OTP verified successfully", user: row });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Kosha Cafe backend server running on http://localhost:${PORT}`);
});
