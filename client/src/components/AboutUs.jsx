import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
                Welcome to the Curtain Center, your number one source for all curtain-related products. We are dedicated to providing you the best quality curtain materials and accessories, with a focus on dependability, customer service, and uniqueness.
            </Typography>
            <Typography variant="body1" paragraph>
                Founded in 2005, Curtain Center has come a long way from its beginnings. We now serve customers all over the place and are thrilled to be a part of the curtain industry.
            </Typography>
            <Typography variant="body1" paragraph>
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </Typography>
            <Typography variant="body1">
                Sincerely, <br />
                The Curtain Center Team
            </Typography>
        </Box>
    );
}

export default AboutUs;
