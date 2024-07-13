import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';

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
                navigate(`/gallery/${userEmail}`);
            }else{
                setMessage({ text: 'Invalid Email or Password, Try again', class: 'text-white text-samll' });
            }
        } catch (error) {
            setMessage({ text: 'Error Login, Try again', class: 'text-danger' });
        }
    };

  return (
    <div className="container">
        <div className="body">
            <nav className='nav'>
                <a href="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/></a>
            </nav>
            <div class="form-wrapper">
                <small>{ message && <h6 class={ message.class }>{message.text}</h6>}</small>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin} className='form'>
                    <div class="form-control-1">
                        <input type="text" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="input"/>
                        <label>Email</label>
                    </div>
                    <div class="form-control-1">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input"/>
                        <label>Password</label>
                    </div>
                    <button className='button py-3' type="submit">Sign In</button>
                    <div class="form-help"> 
                        <div class="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <a href="/">Back to Home</a>
                    </div>
                </form>
                <p>New to Netflix? <a href="/register">Sign up now</a></p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <a href="/">Learn more.</a>
                </small>
            </div>
        </div>
    </div>
  )
}
