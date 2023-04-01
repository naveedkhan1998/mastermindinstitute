import React from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ContactUs = () => {
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
            src="https://images.unsplash.com/photo-1593642538065-f5d5eb5c5ca5"
            alt="contact"
            variants={slideRight}
            initial="initial"
            animate="animate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
              lacinia sapien. Etiam ornare massa nec elit ultrices, nec eleifend
              lorem scelerisque. Proin elementum consectetur tortor quis iaculis.
            </Typography>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: theme.spacing(3) }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
