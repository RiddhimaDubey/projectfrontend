import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-main">
        <div className="footer-details">
          <h3>LANOS</h3>
          <p>Innovative EdTech & R&D Solutions</p>
          <div className="footer-info">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>📧 info@lanos.com</p>
              <p>📞 +91 12345 67890</p>
            </div>
            <div className="footer-address">
              <h4>Address</h4>
              <p>📍 Smart Goggle Research Center</p>
              <p>Madhya Pradesh, India</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d78.79314147487123!3d23.851783300656034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUxJzA2LjQiTiA3OMKwNDcnMzUuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 