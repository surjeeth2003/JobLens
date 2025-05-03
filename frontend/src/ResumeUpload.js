import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './ResumeUpload.css';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

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
    <div className="container">
      <div className="title">JobLens: Smart Resume Analyzer</div>

      <div {...getRootProps()} className="drop-zone">
        <input {...getInputProps()} />
        {
          isDragActive
            ? <p>Drop the file here ...</p>
            : <p>Drag & drop your resume here, or click to select</p>
        }
      </div>

      {file && <p style={{ marginTop: '10px' }}>📄 Selected File: {file.name}</p>}

      <button className="upload-btn" onClick={handleUpload}>Upload Resume</button>

      {uploadMessage && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{uploadMessage}</p>}
    </div>
  );
}

export default ResumeUpload;
