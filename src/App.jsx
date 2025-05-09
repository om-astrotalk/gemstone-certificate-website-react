import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/aboutUs';

import KnowYourGemstonesPage from './pages/knowYourGemstones';
import ContactUs from './pages/contact-us/contactUs';
import VerifyCertificate from './pages/verifyCertificate/VerifyCertificate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      {/* You can add more routes later like this: */}
      <Route path="/about" element={<About />} />
      <Route path="/know-your-gemstone" element={<Layout> <KnowYourGemstonesPage /> </Layout>} />
      <Route path="/contact-us" element={<Layout> <ContactUs /> </Layout>} />
      <Route path="/verify-certificate" element={<Layout> <VerifyCertificate /> </Layout>} />
    </Routes>
  );
}

export default App;
