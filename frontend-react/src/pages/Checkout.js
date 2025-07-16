import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RJr4KFMWgOLMP6I0MLji7tbqu5ZqTq3exynQFqwfSwAIISNpCNKkOwQboEQJ5Hd3g33R7kb4TTrdrzl1oAoKyIT00gn8KmiNb');

const PaymentMethods = {
  UPI: 'UPI',
  CARD: 'Credit / Debit Card',
  WALLETS: 'Wallets',
  NETBANKING: 'NetBanking',
};

const beigeBg = '#f5f1ec';

const CheckoutForm = ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [activeTab, setActiveTab] = useState(PaymentMethods.UPI);
  const [upiId, setUpiId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const totalAmount = Object.values(cart).reduce((sum, item) => sum + item.price * item.count, 0);

const generateQrCode = () => {
    // Use the provided QR code image URL instead of generating dynamically
    const providedQrCodeUrl = 'https://i.ibb.co/DDDynTVp/Whats-App-Image-2025-07-13-at-20-57-38.jpg'; // Updated with user provided QR code URL
    setQrCodeUrl(providedQrCodeUrl);
    setError(null);
  };

  const handleUpiPay = () => {
    if (!upiId) {
      setError('Please enter a valid UPI ID');
      return;
    }
    alert(`Payment request sent to UPI ID: ${upiId}. Please complete payment on your UPI app.`);
  };

  const handleCardPayment = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const cartItems = Object.values(cart).map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.count
    }));

    try {
      const response = await fetch('http://localhost:3001/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems })
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Payment failed');
        setProcessing(false);
        return;
      }

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });

      if (result.error) {
        setError(result.error.message);
        setProcessing(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setSucceeded(true);
          setError(null);
          setProcessing(false);
        }
      }
    } catch (err) {
      setError('Payment processing error');
      setProcessing(false);
    }
  };

  return (
<div className="container my-5 p-4" style={{ maxWidth: '900px', minHeight: '900px', backgroundColor: beigeBg, boxShadow: '0 0 15px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <h2 className="mb-4" style={{ fontWeight: '700' }}>Checkout</h2>

      <div className="row mb-4 border-bottom pb-3" style={{ fontSize: '1rem' }}>
        <div className="col-6">
          <h5 style={{ fontWeight: '600' }}>Order Summary</h5>
          <p><strong>Subscription type:</strong> Empty</p>
        </div>
        <div className="col-6 text-end">
          <h5 style={{ fontWeight: '600' }}>Amount</h5>
          <p style={{ fontWeight: '700', fontSize: '1.3rem' }}>₹{totalAmount}</p>
        </div>
      </div>

      <h5 className="mb-3" style={{ fontWeight: '600' }}>Payment Methods</h5>
      <div className="d-flex flex-column flex-md-row border rounded" style={{ minHeight: '320px' }}>
        <div className="d-flex flex-column bg-white" style={{ width: '200px', borderRight: '1px solid #ddd' }}>
          {Object.values(PaymentMethods).map(method => (
            <button
              key={method}
              className={`btn text-start flex-fill ${activeTab === method ? 'bg-success text-white' : 'bg-white text-dark'}`}
              onClick={() => { setActiveTab(method); setError(null); setQrCodeUrl(null); }}
              style={{ borderRadius: 0, border: 'none', padding: '18px 25px', fontWeight: activeTab === method ? '700' : '400', fontSize: '1rem' }}
            >
              {method}
            </button>
          ))}
        </div>

        <div className="flex-grow-1 p-4 d-flex align-items-center justify-content-center" style={{ position: 'relative' }}>
          {activeTab === PaymentMethods.UPI && (
            <div className="d-flex align-items-center w-100 flex-column flex-md-row" style={{ gap: '30px' }}>
              <div style={{ flex: 1, padding: '20px' }}>
                <h6 style={{ fontWeight: '600', marginBottom: '15px' }}>Scan QR from your UPI App</h6>
                <p style={{ color: '#555', fontSize: '0.9rem', marginLeft: '20px', marginBottom: '20px' }}>
                  Scan the QR using any UPI app on your mobile phone like PhonePe, Paytm, GooglePay, BHIM, etc
                </p>
                {qrCodeUrl ? (
                   <img src={qrCodeUrl} alt="UPI QR Code" style={{ width: '300px', height: '393px', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)', marginBottom: '20px' }} />
                ) : (
                  <button className="btn btn-success mb-3" onClick={generateQrCode}>Show QR Code</button>
                )}
                <label htmlFor="upiId" className="form-label mt-3" style={{ fontWeight: '600', fontSize: '0.9rem', color: '#2e7d32', marginBottom: '10px' }}>UPI ID</label>
                <input
                  id="upiId"
                  type="text"
                  className="form-control"
                  placeholder="Username@bankname"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  style={{ borderColor: '#2e7d32', marginBottom: '10px' }}
                />
                <small className="text-muted mb-3 d-block" style={{ marginBottom: '20px' }}>A payment request will be sent to this UPI ID</small>
                <button className="btn btn-success mt-3" onClick={handleUpiPay} style={{ marginBottom: '20px' }}>Verify and Pay</button>
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="UPI" style={{ width: '130px', marginLeft: '20px' }} />
              </div>
            </div>
          )}

          {activeTab === PaymentMethods.CARD && (
            <form onSubmit={handleCardPayment} style={{ width: '100%' }}>
              <CardElement options={{ hidePostalCode: true }} />
              {error && <div className="text-danger mt-2">{error}</div>}
              <button type="submit" disabled={!stripe || processing || succeeded} className="btn btn-success mt-3 w-100" style={{ fontWeight: '600' }}>
                {processing ? 'Processing...' : 'Pay Now'}
              </button>
              {succeeded && <p className="text-success mt-3">Payment succeeded! Thank you for your order.</p>}
            </form>
          )}

          {activeTab === PaymentMethods.WALLETS && (
            <p>Wallet payment method coming soon.</p>
          )}

          {activeTab === PaymentMethods.NETBANKING && (
            <p>NetBanking payment method coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Checkout = ({ cart }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cart={cart} />
    </Elements>
  );
};

export default Checkout;
