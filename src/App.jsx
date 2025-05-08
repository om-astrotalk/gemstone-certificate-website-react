import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/aboutUs';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      {/* You can add more routes later like this: */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
