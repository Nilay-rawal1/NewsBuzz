// NewsUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = async () => {
    try {
      await axios.post('http://localhost:3000/news/upload', {
        title,
        content,
      });
      console.log('News article uploaded successfully');
    } catch (error) {
      console.error('News article upload failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Upload News Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default NewsUpload;
