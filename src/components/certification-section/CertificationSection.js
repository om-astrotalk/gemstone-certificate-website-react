import React from 'react';
import {
  FaMicroscope,
  FaUsers,
  FaFileAlt,
  FaShieldAlt
} from 'react-icons/fa';
import './certificationSection.scss';
import CertificateDummy from "../../assets/certificate-dummy.png"

const CertificationSection = () => {
  return (
    <section className="certification-section">
      <div className="container">
        <div className="text-center header">
        <h2 className="main-heading">
        Professional Gemstone <span className="true-value">Certification</span>
      </h2>
          <p>
            Our internationally recognized certificates provide detailed analysis and authenticity verification for your precious gemstones.
          </p>
        </div>

        <div className="grid-wrapper">
          {/* Left image */}
          <div className="image-container">
            <div className="gradient-overlay" />
            <div className="image-wrapper">
              <img
                src={ CertificateDummy}
                alt="Gemstone Certification"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="content">
            <div className="card">
              <div className="icon-box">
                <FaMicroscope className="icon" />
              </div>
              <div>
                <h3>Approved Gemstone Laboratory</h3>
                <p>Our lab is equipped with state-of-the-art technology to provide accurate gemstone analysis and certification.</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <FaUsers className="icon" />
              </div>
              <div>
                <h3>Trusted by 3 lakh+ customers</h3>
                <p>Join thousands of satisfied customers who trust our certification services for their valuable gemstones.</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <FaFileAlt className="icon" />
              </div>
              <div>
                <h3>Certified Authenticity</h3>
                <p>By professional gemologists with decades of experience in the field.</p>
              </div>
            </div>

            <div className="buttons">
              <button className="primary">Start Certification Process</button>
              <button className="contact-us">Contact Us</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationSection;
