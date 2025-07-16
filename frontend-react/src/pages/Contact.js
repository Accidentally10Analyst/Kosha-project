import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to submit message.');
      }
    } catch (err) {
      setError('Error submitting message.');
    }
  };

  const storeLocations = [
    {
      id: 1,
      name: 'Kosha Cafe Pune',
      rating: 4.5,
      address: '123 MG Road, Pune, Maharashtra',
      phone: '+91 20 1234 5678',
      hours: '8 AM - 10 PM',
      mapEmbedUrl: 'https://maps.google.com/maps?q=MG%20Road%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 2,
      name: 'Kosha Cafe Mumbai',
      rating: 4.7,
      address: '456 Marine Drive, Mumbai, Maharashtra',
      phone: '+91 22 9876 5432',
      hours: '7 AM - 11 PM',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Marine%20Drive%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 3,
      name: 'Kosha Cafe Lucknow',
      rating: 4.6,
      address: '789 Hazratganj, Lucknow, Uttar Pradesh',
      phone: '+91 522 123 4567',
      hours: '9 AM - 9 PM',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Hazratganj%20Lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed'
    }
  ];

  return (
    <>
    <div className="container my-5" style={{backgroundColor: '#f0f4f3', padding: '20px', borderRadius: '10px'}}>
      <h2>Find Our Stores</h2>
      <div className="store-locator">
        {storeLocations.map(store => (
          <div key={store.id} className="store-item d-flex flex-column flex-md-row mb-4 p-3" style={{backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
            <div className="store-info flex-fill pe-md-3 mb-3 mb-md-0" style={{borderRight: '1px solid #ddd', paddingRight: '20px'}}>
              <h5>{store.name}</h5>
              <p style={{color: '#4caf50', fontWeight: 'bold'}}>Rating: {store.rating} / 5</p>
              <p><strong>Address:</strong> {store.address}</p>
              <p><strong>Phone:</strong> {store.phone}</p>
              <p><strong>Hours:</strong> {store.hours}</p>
            </div>
            <div className="store-map flex-fill" style={{paddingLeft: '20px'}}>
              <iframe
                src={store.mapEmbedUrl}
                width="100%"
                height="250"
                className="img-hover-pop"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                title={"Map of " + store.name}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5">Get in Touch</h2>
      {submitted && <div className="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

    {showModal && (
      <div className="modal-backdrop" onClick={closeModal} style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1050,
      }}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 5px 15px rgba(0,0,0,.5)',
        }}>
          <button onClick={closeModal} style={{
            float: 'right',
            fontSize: '1.5rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }} aria-label="Close modal">&times;</button>
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        </div>
      </div>
    )}
    </>
  );
}

export default Contact;
