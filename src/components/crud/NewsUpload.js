import React, { useState } from 'react';
import axios from 'axios';

const NewsUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    try {
      setLoading(true);
      setError('');

      // Basic form validation
      if (!title || !content) {
        setError('Please fill in both title and content fields.');
        return;
      }

      // Retrieve authentication token from storage (replace with your actual method)
      const authToken = localStorage.getItem('authToken');

      // Include the token in the request headers
      await axios.post(
        'http://localhost:3000/news/upload',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log('News article uploaded successfully');
      // Optionally, you can reset the form after a successful upload
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('News article upload failed:', error.response.data.error);
      setError('Failed to upload news article. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload News Article</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default NewsUpload;
