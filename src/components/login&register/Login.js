// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Login.css';
import { async } from 'q';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // Initialize useHistory
  const transfer = async() =>{
    history.push('/')
  }
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
    <div className='container contres' >
      <form  className='borform' >
        <h1 className='text my-4 '>Login</h1>
        <div className='form-floating my-3 mb-3'>
          <input className='form-control'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className='form-floating my-3'>
          <input
            className='form-control'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button  className='' onClick={transfer}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
