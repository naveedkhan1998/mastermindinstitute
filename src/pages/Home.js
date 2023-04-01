import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Typography, Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    marginBottom: 1,
  },
  paragraph: {
    marginBottom: 1,
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const handleLearnMoreClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.4 } },
    hover: { scale: 1.1 },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5, delay: 0.6, staggerChildren: 0.9 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ height: '100vh' }}>
          <Grid item xs={12}>
            <Box textAlign="center">
              <motion.div initial="hidden" animate="visible" variants={titleVariants}>
                <Typography variant="h2" className={classes.title}>
                  Welcome to Master Mind Institute
                </Typography>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={paragraphVariants}>
                <Typography variant="body1" className={classes.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget felis ut nunc finibus finibus.
                </Typography>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={buttonVariants} whileHover="hover">
                <Button variant="contained" component={Link} to='/about' className={classes.button}>
                  Learn More
                </Button>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <motion.div initial="hidden" animate="visible" variants={gridVariants}>
              <Grid container justifyContent="center" alignItems="center" spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div variants={itemVariants}>
                    <Typography variant="h5">Feature 1</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5">Feature 2</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5">Feature 3</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5">Feature 4</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </Grid>
  </motion.div>
</Container>
  );
};
               


export default Home;
