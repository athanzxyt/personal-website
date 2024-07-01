// ContentPanel.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Blogs from '../pages/Blogs';

function ContentPanel() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default ContentPanel;