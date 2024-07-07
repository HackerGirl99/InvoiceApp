import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
            <Typography variant="body1">&copy; 2024 Curtain Center</Typography>
        </Box>
    );
};

export default Footer;
