import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();
  
  return (
    <div className="page-container">
      <div className="content-card">
        <div className="header">
          <h1 className="title">About JobLens</h1>
          <div className="nav-buttons">
            <button onClick={() => navigate('/')} className="nav-btn">Home</button>
            <button onClick={() => navigate('/about')} className="nav-btn active">About Us</button>
            <button onClick={() => navigate('/analyze')} className="nav-btn">Analyze</button>
          </div>
        </div>

        <div className="main-content about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              JobLens is a smart resume analyzer that leverages modern NLP and ML techniques to evaluate your resume
              against job descriptions. Get a match score, identify missing skills, and receive tips for improvement.
            </p>
          </div>
          
          <div className="about-section">
            <h2>How It Works</h2>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Upload Resume</h3>
                <p>Upload your resume in PDF, DOCX, or DOC format</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Analysis</h3>
                <p>Our AI analyzes your resume against job descriptions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Results</h3>
                <p>Get match scores and improvement suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;