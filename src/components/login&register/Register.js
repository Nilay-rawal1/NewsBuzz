
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
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
    <div className='register_name'>
      <div className='boxx'>
      <h2 className='text-light'>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
