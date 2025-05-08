import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
