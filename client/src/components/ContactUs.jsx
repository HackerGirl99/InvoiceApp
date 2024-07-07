
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../CSS/ContactUs.css';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle contact form submission
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" paragraph>
                If you have any questions, feel free to reach out to us using the form below. We are here to assist you with any inquiries you may have about our products or services.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default ContactUs;
