import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ResumeUpload.css';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setUploadMessage('');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadMessage('✅ File uploaded successfully!');
    } catch (error) {
      console.error(error);
      setUploadMessage('❌ Failed to upload file.');
    }
  };

  return (
    <div className="page-container">
      <div className="content-card">
        <div className="header">
          <h1 className="title">JobLens: Smart Resume Analyzer</h1>
          <div className="nav-buttons">
            <button onClick={() => navigate('/')} className="nav-btn active">Home</button>
            <button onClick={() => navigate('/about')} className="nav-btn">About Us</button>
            <button onClick={() => navigate('/analyze')} className="nav-btn">Analyze</button>
          </div>
        </div>

        <div className="main-content">
          <p className="description">
            JobLens helps job seekers analyze their resumes by comparing them with job descriptions.
            Upload your resume and get a smart, AI-powered analysis of how well it matches the job!
          </p>

          <div {...getRootProps()} className="drop-zone">
            <input {...getInputProps()} />
            {
              isDragActive
                ? <p>Drop the file here ...</p>
                : (
                  <div className="dropzone-content">
                    <i className="file-icon">📄</i>
                    <p>Drag & drop your resume here, or click to select</p>
                    <span className="supported-formats">Supported formats: PDF, DOCX, DOC</span>
                  </div>
                )
            }
          </div>

          {file && <p className="file-info">📄 Selected File: <span className="file-name">{file.name}</span></p>}

          <button className="upload-btn" onClick={handleUpload}>Upload Resume</button>

          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ResumeUpload;