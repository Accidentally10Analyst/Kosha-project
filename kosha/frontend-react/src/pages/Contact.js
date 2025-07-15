import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const disclaimerContent = `
<h2>Disclaimer</h2>
<p>Kosha Cafe Pvt. Ltd. has sole and exclusive rights to own and operate Kosha Cafe stores and do not offer any franchisees.</p>
<p>Neither Kosha Cafe Pvt. Ltd. nor its directors/ officers/employees shall be responsible for any loss, harm, damage or fraud that occurs or may occur or arise to any person who decides to deal with fake agents/websites offering franchises.</p>
`;

const privacyPolicyContent = `
<h2>Privacy Policy</h2>
<p>Kosha Cafe Private Limited (“Kosha Cafe” or “we”) takes the privacy of your information seriously. This Privacy Notice describes the types of personal information we collect from you through our stores, website (including sub-domains and microsites) and mobile applications. It also describes the purposes for which we collect that personal information, the other parties with whom we may share it and the measures we take to protect the security of your data. It also tells you about your rights and choices with respect to your personal information, and how you can contact us about our privacy practices.</p>
<p>You are advised to carefully read this Privacy Notice before using or availing any of our products and/or services.</p>
<!-- Add the rest of the privacy policy content here -->
`;

const faqsContent = `
<h2>FAQs</h2>
<p>Frequently Asked Questions content goes here.</p>
`;

const customerServiceContent = `
<h2>Customer Service</h2>
<p>Customer Service content goes here.</p>
`;

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
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                title={`Map of ${store.name}`}
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

      <footer className="mt-5 pt-5" style={{backgroundColor: '#f5f0e6', color: '#333', fontSize: '0.9rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <a href="/" aria-label="Home">
                <img src="https://dynamic.brandcrowd.com/asset/logo/dabf1ffd-2d7f-4b34-aba0-072136b55060/logo-search-grid-2x?logoTemplateVersion=2&amp;v=638854648226770000&amp;text=Kosha+Cafe&amp;colorpalette=grayscale" alt="Kosha Cafe Logo" style={{width: '120px', marginBottom: '1rem', maxWidth: '100%', height: 'auto'}} />
              </a>
              <p>Kosha Cafe Company © 2025. All rights reserved.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li><Link to="/our-heritage" style={{color: '#333', textDecoration: 'none'}}>Our Heritage</Link></li>
                <li><Link to="/coffeehouse" style={{color: '#333', textDecoration: 'none'}}>Coffeehouse</Link></li>
                <li><Link to="/our-company" style={{color: '#333', textDecoration: 'none'}}>Our Company</Link></li>
                <li><Link to="/responsibility" style={{color: '#333', textDecoration: 'none'}}>Responsibility</Link></li>
                <li><Link to="/diversity" style={{color: '#333', textDecoration: 'none'}}>Diversity</Link></li>
                <li><Link to="/community" style={{color: '#333', textDecoration: 'none'}}>Community</Link></li>
                <li><Link to="/ethical-sourcing" style={{color: '#333', textDecoration: 'none'}}>Ethical Sourcing</Link></li>
                <li><Link to="/environmental-stewardship" style={{color: '#333', textDecoration: 'none'}}>Environmental Stewardship</Link></li>
                <li><Link to="/learn-more" style={{color: '#333', textDecoration: 'none'}}>Learn More</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li><Link to="/disclaimer" style={{color: '#007bff', textDecoration: 'none'}}>Disclaimer</Link></li>
                <li><Link to="/privacy-policy" style={{color: '#007bff', textDecoration: 'none'}}>Privacy Policy</Link></li>
                <li><Link to="/faqs" style={{color: '#007bff', textDecoration: 'none'}}>FAQs</Link></li>
                <li><Link to="/customer-service" style={{color: '#007bff', textDecoration: 'none'}}>Customer Service</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/privacy-policy" style={{color: '#007bff', textDecoration: 'none'}}>Privacy Policy</Link></li>
                <li><Link to="/faqs" style={{color: '#007bff', textDecoration: 'none'}}>FAQs</Link></li>
                <li><Link to="/customer-service" style={{color: '#007bff', textDecoration: 'none'}}>Customer Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Social Media</h5>
              <ul className="list-inline">
                <li className="list-inline-item me-3">
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-instagram" aria-hidden="true"></i> Instagram
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
                  </a>
                </li>
                <li className="list-inline-item me-3" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-instagram" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-facebook-f" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" style={{color: '#333'}}>
                    <i className="fab fa-twitter" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                  </a>
                </li>
                <li className="list-inline-item me-3" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <a href="#" style={{display: 'inline-block'}}>
                    <img
                      src="https://logosmarken.com/wp-content/uploads/2021/02/App-Store-Emblem.png"
                      alt="Download on the App Store"
                      style={{height: '40px'}}
                    />
                  </a>
                  <a href="#" style={{display: 'inline-block'}}>
                    <img
                      src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-play-app-icon-vector-png-image_9183316.png"
                      alt="Get it on Google Play"
                      style={{height: '40px'}}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline">
                <li className="list-inline-item me-3"><Link to="/web-accessibility" style={{color: '#333', textDecoration: 'none'}}>Web Accessibility</Link></li>
                <li className="list-inline-item me-3"><Link to="/privacy-statement" style={{color: '#333', textDecoration: 'none'}}>Privacy Statement</Link></li>
                <li className="list-inline-item me-3"><Link to="/terms-of-use" style={{color: '#333', textDecoration: 'none'}}>Terms of Use</Link></li>
                <li className="list-inline-item me-3"><Link to="/contact" style={{color: '#333', textDecoration: 'none'}}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

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
