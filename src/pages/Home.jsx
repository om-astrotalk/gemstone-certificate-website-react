import React from 'react';
import Banner from '../components/banner/Banner';
import CertificationSection from '../components/certification-section/CertificationSection';
import Certification from '../components/certification/Certification';
import CustomerTestimonial from '../components/customer-testimonial/CustomerTestimonial';
import KnowYourGemstone from '../components/know-your-gemstone/KnowYourGemstone';
import StatsSection from '../components/statsSection/StatsSection';
import ThingsDifferent from '../components/thingsDifferent/ThingsDifferent';

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <Banner />
      <Certification />
      <ThingsDifferent />
      <KnowYourGemstone />
      <StatsSection />
      <CustomerTestimonial />
      <CertificationSection />
    </div>
  );
};

export default Home;
