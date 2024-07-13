import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/register', { userName, userEmail, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            setMessage('Error registering user');
        }
    };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label className='text-dark'>User name</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='text-dark'>User Email</label>
          <input
            type="text"
            className="form-control"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='text-dark'>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-dark">Already have an account? <a href="/login" className='text-primary mx-1 text-decoration-none'>Login</a></div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {message && <p className="mt-3 text-dark">{message}</p>}
    </div>
  )
}
