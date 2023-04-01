import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const theme = useTheme();

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const slideRight = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Box sx={{ flexGrow: 1, mt: theme.spacing(10) }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <motion.img
            src="https://images.unsplash.com/photo-1549298916-96c25cbcadb5"
            alt="team"
            variants={slideRight}
            initial="initial"
            animate="animate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
              lacinia sapien. Etiam ornare massa nec elit ultrices, nec eleifend
              lorem scelerisque. Proin elementum consectetur tortor quis iaculis.
            </Typography>
            <Typography variant="body1" paragraph>
              Suspendisse nec metus dolor. Nunc ultricies metus vel nulla placerat
              suscipit. Suspendisse potenti. Duis vitae pretium lectus. Nam non
              lacus posuere, hendrerit est vitae, pharetra libero.
            </Typography>
            <Typography variant="body1" paragraph>
              Suspendisse nec metus dolor. Nunc ultricies metus vel nulla placerat
              suscipit. Suspendisse potenti. Duis vitae pretium lectus. Nam non
              lacus posuere, hendrerit est vitae, pharetra libero.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                component={Link}
                to="/"
                color="primary"
                sx={{ mt: theme.spacing(3) }}
              >
                Back to Homepage
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
