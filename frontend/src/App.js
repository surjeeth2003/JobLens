import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeUpload from './ResumeUpload';
import About from './About';
import Analyze from './Analyze';
// Global styles are in index.css

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ResumeUpload />} />
          <Route path="/about" element={<About />} />
          <Route path="/analyze" element={<Analyze />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;