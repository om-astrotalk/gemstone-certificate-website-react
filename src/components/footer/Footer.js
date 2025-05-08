import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-outer">
                <div className="logo-inner">
                  <div className="logo-core"></div>
                </div>
              </div>
              <span className="logo-text">GemVerify</span>
            </div>
            <p className="footer-text">
              Premium gemstone certification and authentication services backed by cutting-edge technology.
            </p>
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Gemstone Testing</Link></li>
              <li><Link to="/services">Diamond Certification</Link></li>
              <li><Link to="/services">Jewelry Appraisal</Link></li>
              <li><Link to="/services">Origin Determination</Link></li>
              <li><Link to="/services">Market Valuation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:info@crystalcert.com">info@crystalcert.com</a>
              </li>
              <li>123 Crystal Ave</li>
              <li>New York, NY 10001</li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CrystalCert. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
