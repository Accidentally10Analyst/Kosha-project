const axios = require('axios');
const crypto = require('crypto');

const JUSPAY_API_KEY = 'your_juspay_api_key'; // Replace with your Juspay API key
const JUSPAY_SECRET = 'your_juspay_secret'; // Replace with your Juspay secret
const JUSPAY_BASE_URL = 'https://api.juspay.in';

function generateSignature(payload, secret) {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

async function createUpiPayment(orderId, amount, upiId) {
  const payload = {
    order_id: orderId,
    amount: amount,
    payment_method: {
      type: 'upi',
      vpa: upiId,
      deeplink: `upi://pay?pa=${upiId}&pn=KoshaCafe&am=${(amount / 100).toFixed(2)}`
    }
  };

  const payloadString = JSON.stringify(payload);
  const signature = generateSignature(payloadString, JUSPAY_SECRET);

  try {
    const response = await axios.post(`${JUSPAY_BASE_URL}/payments`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JUSPAY_API_KEY}`,
        'X-JUSPAY-SIGNATURE': signature
      }
    });
    return response.data;
  } catch (error) {
    console.error('Juspay UPI payment creation error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  createUpiPayment
};
