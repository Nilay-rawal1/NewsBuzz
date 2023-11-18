// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // Initialize useHistory

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });
      console.log('Login successful');
      // Redirect to the dashboard after successful login
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        className='logininput'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='logininput'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
