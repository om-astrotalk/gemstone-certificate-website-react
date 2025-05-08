import React from 'react';
import './heroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-pattern"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            About Us
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">
            Your Trusted Gem Experts for Authentication, Certification, and Valuation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
