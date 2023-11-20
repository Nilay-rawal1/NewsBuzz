// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { async } from 'q';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/news');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error.response.data.error);
    }
  };

  const updated = async () => {
    alert("updated succesfully")
  }

  const handleUpload = async () => {
    try {
      await axios.post('http://localhost:3000/news/upload', {
        title,
        content,
      });
      console.log('News article uploaded successfully');
      fetchArticles(); // Refresh the articles after upload
    } catch (error) {
      console.error('News article upload failed:', error.response.data.error);
    }
  };

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`http://localhost:3000/news/${articleId}`);
      console.log('News article deleted successfully');
      fetchArticles(); // Refresh the articles after deletion
    } catch (error) {
      console.error('News article deletion failed:', error.response.data.error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []); // Fetch articles on component mount

  return (
    <div className='contain'>
      <h2>Dashboard</h2>
      <div>
        <h3>Your Articles</h3>
        <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <strong>{article.title}</strong>
              <p>{article.content}</p>
              <p>Author: {article.author.username}</p>
              <p>Created At: {new Date(article.createdAt).toLocaleString()}</p>
              <button onClick={() => handleDelete(article._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div class="box">
        <h3 class="heading">Upload New Article</h3>
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
        <button onClick={updated}>Upload</button>
      </div>
    </div>
  );
};

export default Dashboard;
