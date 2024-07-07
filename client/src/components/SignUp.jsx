import React, { useState } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Signup.css'; 
import signUpImage from '../assets/sign-up.png';
const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/user/signup', {
                username: formData.username,
                password: formData.password
            });
            
            if (response.data.status === 'success') {
                navigate('/signin');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="signup-container">
            <div className="left-section">
                <Typography variant="h4">Sign Up</Typography>
                <p>Create your account to start using Invoice App.</p>
                <img src={signUpImage} alt="Sign Up Illustration" />
            </div>
            <div className="right-section">
                <Typography variant="h4">Create Account</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {error && <Typography className="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Sign Up</Button>
                </form>
                <Typography variant="body1">
                    Already have an account? <Link href="/login">Login</Link>
                </Typography>
            </div>
        </div>
    );
};

export default SignUp;
