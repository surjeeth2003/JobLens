import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Analyze.css';

function Analyze() {
  const navigate = useNavigate();
  
  return (
    <div className="page-container">
      <div className="content-card">
        <div className="header">
          <h1 className="title">Resume Analysis</h1>
          <div className="nav-buttons">
            <button onClick={() => navigate('/')} className="nav-btn">Home</button>
            <button onClick={() => navigate('/about')} className="nav-btn">About Us</button>
            <button onClick={() => navigate('/analyze')} className="nav-btn active">Analyze</button>
          </div>
        </div>

        <div className="main-content analyze-content">
          <div className="analysis-placeholder">
            <div className="placeholder-icon">⏳</div>
            <h2>Analysis Dashboard</h2>
            <p>
              This page will allow you to view results of the resume analysis, including match score, skills gap, and suggestions.
              (Integration with backend coming soon.)
            </p>
            
            <div className="sample-metrics">
              <div className="metric-card">
                <h3>Match Score</h3>
                <div className="placeholder-chart"></div>
              </div>
              <div className="metric-card">
                <h3>Skills Gap</h3>
                <div className="placeholder-chart"></div>
              </div>
              <div className="metric-card">
                <h3>Recommendations</h3>
                <div className="placeholder-list"></div>
              </div>
            </div>
            
            <button className="upload-btn" onClick={() => navigate('/')}>Upload New Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyze;