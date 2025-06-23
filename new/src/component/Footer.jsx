import React from 'react';
import './Footer.css';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: '🌐' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com', icon: '📸' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
];

const mapUrl =
  'https://www.google.com/maps/place/Lanos+Institute,+Makroniya,+Sagar,+Madhya+Pradesh+470004,+India/';
const embedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.23496429581!2d78.7599340751956!3d23.46896397887259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e2e2e2e2e3%3A0x123456789abcdef!2sLanos%20Institute%2C%20Makroniya%2C%20Sagar%2C%20Madhya%20Pradesh%20470004%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin';

const Footer = () => (
  <footer className="footer">
    <div className="footer-social">
      <h3>Connect with us</h3>
      <div className="social-links">
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </a>
        ))}
      </div>
      <div className="footer-contact">
        <p><strong>Call us:</strong> <a href="tel:+919876543210" className="footer-phone">+91 98765 43210</a></p>
        <p className="footer-desc">Lanos Institute is dedicated to empowering learners and innovators through cutting-edge EdTech solutions, research, and hands-on training. Reach out to us for collaborations, admissions, or partnership opportunities.</p>
      </div>
    </div>
    <div className="footer-map">
      <h3>Our Location</h3>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        <iframe
          title="Lanos Institute Location"
          src={embedUrl}
          width="250"
          height="180"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
      <p className="map-caption">Tap map to view location</p>
    </div>
  </footer>
);

export default Footer; 