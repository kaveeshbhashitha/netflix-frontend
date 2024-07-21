import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';

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
            if (response.data === "User already registered as a user") {
                setMessage({text: response.data, class: 'alert alert-danger'});
            }else{
                navigate('/login');
            }
        } catch (error) {
            setMessage({ text: 'Error occuerd, registration faild', class: 'alert alert-danger' });
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
                <h2>Sign Up</h2>
                <form onSubmit={handleRegister} className='form'>
                    <div class="form-control-1">
                        <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)} className="input"/>
                        <label>Your Name</label>
                    </div>
                    <div class="form-control-1">
                        <input type="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="input"/>
                        <label>Your Email</label>
                    </div>
                    <div class="form-control-1">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input"/>
                        <label>Give Password</label>
                    </div>
                    <button className='button py-3' type="submit">Sign Up</button>
                    <div class="form-help"> 
                        <div class="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <a href="/">Back to Home</a>
                    </div>
                </form>
                <p>Already Netflix Member? <a href="/login">Sign in now</a></p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <a href="/">Learn more.</a>
                </small>
            </div>
        </div>
    </div>
  )
}
