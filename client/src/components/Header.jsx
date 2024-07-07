import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom with alias RouterLink
import logo from '../assets/invoice-logo-1.png'; // Adjust the path based on your folder structure

const Header = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 120 }} />
                <Typography variant="h6" style={{ marginLeft: 20 }}>
                    Invoice App
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Link component={RouterLink} to="/" color="inherit" style={{ marginRight: 20 }}>Home</Link>
                <Link component={RouterLink} to="/aboutus" color="inherit" style={{ marginRight: 20 }}>About Us</Link>
                <Link component={RouterLink} to="/contactus" color="inherit" style={{ marginRight: 20 }}>Contact Us</Link>
                <Button component={RouterLink} to="/login" variant="contained" color="primary" style={{ marginRight: 10 }}>Login</Button>
                <Button component={RouterLink} to="/signup" variant="contained" color="primary">Signup</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
