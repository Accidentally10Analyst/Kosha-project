import React from 'react';
import { useNavigate } from 'react-router-dom';

const beigeBg = '#f5f5dc';

function Cart({ cart, removeItemFromCart, addItemToCart }) {
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.count, 0);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {Object.values(cart).map(item => (
              <div key={item.id} className="list-group-item d-flex align-items-center flex-wrap border-0 border-bottom p-3" style={{ backgroundColor: beigeBg }}>
                <img src={item.image} alt={item.name} className="me-3 rounded" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">{item.description || 'No description available'}</p>
                  <div className="d-flex align-items-center mt-2">
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => removeItemFromCart(item.id)}>-</button>
                    <span>{item.count}</span>
                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => addItemToCart(item)}>+</button>
                    <button className="btn btn-outline-secondary btn-sm ms-3" onClick={() => alert('Customize feature coming soon!')}>Customize</button>
                  </div>
                </div>
                <div className="text-end" style={{ minWidth: '100px', maxWidth: '100px', flexShrink: 0, whiteSpace: 'nowrap', overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                  <strong>₹{(item.price * item.count).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded mb-4 d-flex justify-content-between align-items-center" style={{ backgroundColor: beigeBg }}>
            <div>
              <strong>⭐ Rewards and Offers</strong>
              <p className="mb-0 text-muted">0 offers</p>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="specialInstructions" className="form-label"><strong>Any other request?</strong></label>
            <textarea id="specialInstructions" className="form-control" rows="4" placeholder="Have something specific in mind? Write it down and we’ll let our baristas know." />
          </div>

          <div className="fixed-bottom text-dark d-flex justify-content-between align-items-center p-3 flex-wrap" style={{ backgroundColor: beigeBg, borderTop: '1px solid #ccc' }}>
            <div className="mb-2 mb-md-0">
              <small>{Object.values(cart).length} item{Object.values(cart).length > 1 ? 's' : ''} added</small><br />
              <strong>{Object.values(cart).map(item => item.name).slice(0, 1).join('')}{Object.values(cart).length > 1 ? ` + ${Object.values(cart).length - 1} more` : ''}</strong>
            </div>
            <div className="mb-2 mb-md-0">
              <strong>₹{totalPrice.toFixed(2)}</strong>
            </div>
            <button className="btn btn-dark btn-sm" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
