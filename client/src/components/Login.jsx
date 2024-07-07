import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';
import loginImage from '../assets/curtain3.jpeg';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/signin', {
                username: formData.username,
                password: formData.password
            });

            if (response.data.status === 'success') {
                navigate('/home'); // Redirect to home page on successful login
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError('Error signing in. Please try again.');
            console.error('Error:', error);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/signup'); // Redirect to signup page
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        navigate('/forgot-password'); // Redirect to forgot password page
    };

    return (
        <div className="login-container">
            <div className="welcome-section">
                <Typography variant="h4">Welcome Back!</Typography>
                <p>
                    Log in to continue your journey with us. Access your personalized dashboard and exclusive content by entering your credentials below.
                    Ready for more discoveries? Let's dive in! 😊
                </p>
                <img src={loginImage} alt="Login Illustration" />
            </div>
            <div className="login-section">
                <Typography variant="h4">Sign In</Typography>
                <form onSubmit={handleSignIn}>
                    <TextField
                        label="Username or Email"
                        type="text"
                        fullWidth
                        margin="normal"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {error && <Typography className="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Sign In</Button>
                    <div className="links">
                        <Link href="#" className="forget-password" onClick={handleForgotPassword}>Forgot password?</Link>
                        <Typography>Don't have an account? <Link href="#" onClick={handleSignUp}>Sign Up</Link></Typography>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
