// ContentPanel.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import About from './pages/About';

function ContentPanel() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<About />} />
    </Routes>
  )
}

export default ContentPanel;