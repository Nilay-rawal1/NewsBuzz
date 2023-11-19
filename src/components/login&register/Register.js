// Assuming this is your Register component

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/auth/register', {
        username,
        password,
      });
      console.log('Registration successful');
      // Redirect to login after successful registration
      history.push('/Login');
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (

    

    <div className='container contres' >
      <form  className='borform' >
        <h1 className='text my-4 '>Register</h1>
        <div className='form-floating my-3 mb-3'>
          <input className='form-control'
            type="email"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email address</label>
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
        <button  className='my-3' onClick={handleRegister}>Register</button>

      </form>

    </div>
  );
};

export default Register;
