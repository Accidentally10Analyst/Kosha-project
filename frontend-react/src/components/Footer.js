import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#222', color: '#ddd', fontSize: '0.9rem', paddingTop: '40px', paddingBottom: '40px', marginTop: '40px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <a href="/" aria-label="Home" style={{display: 'inline-block', marginBottom: '1rem'}}>
              <img src="https://dynamic.brandcrowd.com/asset/logo/dabf1ffd-2d7f-4b34-aba0-072136b55060/logo-search-grid-2x?logoTemplateVersion=2&amp;v=638854648226770000&amp;text=Kosha+Cafe&amp;colorpalette=grayscale" alt="Kosha Cafe Logo" style={{width: '120px', height: 'auto'}} />
            </a>
            <p style={{fontSize: '0.85rem', color: '#aaa'}}>Kosha Cafe Company © {new Date().getFullYear()}. All rights reserved.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 style={{color: '#fff', marginBottom: '1rem'}}>About Us</h5>
            <ul className="list-unstyled" style={{lineHeight: '1.8'}}>
              <li><Link to="/our-heritage" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Our Heritage</Link></li>
              <li><Link to="/coffeehouse" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Coffeehouse</Link></li>
              <li><Link to="/our-company" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Our Company</Link></li>
              <li><Link to="/responsibility" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Responsibility</Link></li>
              <li><Link to="/diversity" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Diversity</Link></li>
              <li><Link to="/community" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Community</Link></li>
              <li><Link to="/ethical-sourcing" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Ethical Sourcing</Link></li>
              <li><Link to="/environmental-stewardship" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Environmental Stewardship</Link></li>
              <li><Link to="/learn-more" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Learn More</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 style={{color: '#fff', marginBottom: '1rem'}}>Legal</h5>
            <ul className="list-unstyled" style={{lineHeight: '1.8'}}>
              <li><Link to="/disclaimer" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Disclaimer</Link></li>
              <li><Link to="/privacy-policy" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Privacy Policy</Link></li>
              <li><Link to="/faqs" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>FAQs</Link></li>
              <li><Link to="/customer-service" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Customer Service</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 style={{color: '#fff', marginBottom: '1rem'}}>Quick Links</h5>
            <ul className="list-unstyled" style={{lineHeight: '1.8'}}>
              <li><Link to="/privacy-policy" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Privacy Policy</Link></li>
              <li><Link to="/faqs" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>FAQs</Link></li>
              <li><Link to="/customer-service" style={{color: '#ddd', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>Customer Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 style={{color: '#fff', marginBottom: '1rem'}}>Social Media</h5>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
                  <i className="fab fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
                  <i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
                  <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
                </a>
              </li>
              <li className="list-inline-item me-3" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
                  <i className="fab fa-instagram" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
                  <i className="fab fa-facebook-f" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="#" style={{color: '#ddd', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ddd'}>
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
              <li className="list-inline-item me-3"><Link to="/web-accessibility" style={{color: '#bbb', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#bbb'}>Web Accessibility</Link></li>
              <li className="list-inline-item me-3"><Link to="/privacy-statement" style={{color: '#bbb', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#bbb'}>Privacy Statement</Link></li>
              <li className="list-inline-item me-3"><Link to="/terms-of-use" style={{color: '#bbb', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#bbb'}>Terms of Use</Link></li>
              <li className="list-inline-item me-3"><Link to="/contact" style={{color: '#bbb', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#bbb'}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
