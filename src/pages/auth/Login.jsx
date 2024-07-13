import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/login', { userEmail, password });
            setMessage(response.data);
            if (response.data === 'Login successful') {
                sessionStorage.setItem('user', userEmail);
                navigate('/gallery')
            }
        } catch (error) {
            setMessage('Error logging in');
        }
    };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className='text-dark'>user email</label>
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
        <div className='text-dark'>Don't have and account ?<a href="/register" className='text-danger text-decoration-none mx-1'>Register</a></div>
        <div className='text-dark'>Don't have and account ?<a href="/" className='text-primary text-decoration-none mx-1'>Back to home</a></div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {message && <p className="mt-3 text-dark">{message}</p>}
    </div>
  )
}
