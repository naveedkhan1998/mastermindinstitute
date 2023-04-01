import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountCircle, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const renderMenuItems = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: isSmallerScreen ? 'column' : 'row' }}>
        <Button
          component={NavLink}
          to="/"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            mr: isSmallerScreen ? 0 : 2,
            mb: isSmallerScreen ? 1 : 0,
            color: '#2863ed',
          }}
          activeClassName="active-link"
          onClick={handleLinkClick}
        >
          Home
        </Button>
        <Button
          component={NavLink}
          to="/about"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            mr: isSmallerScreen ? 0 : 2,
            mb: isSmallerScreen ? 1 : 0,
            color: '#2863ed',
          }}
          activeClassName="active-link"
          onClick={handleLinkClick}
        >
          About Us
        </Button>
        <Button
          component={NavLink}
          to="/contact"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            mr: isSmallerScreen ? 0 : 2,
            mb: isSmallerScreen ? 1 : 0,
            color: '#2863ed',
          }}
          activeClassName="active-link"
          onClick={handleLinkClick}
        >
          Contact Us
        </Button>
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#2863ed' }}>
            MASTER-MIND-INSTITUTE
          </Typography>
          {isSmallerScreen ? (
            <>
              <IconButton onClick={handleMenuClick} sx={{ color: '#2863ed' }}>
                {showMenu ? <Menu /> : <AccountCircle />}
              </IconButton>
              {showMenu && renderMenuItems()}
            </>
          ) : (
            <Box sx={{ display: 'flex' }}>{renderMenuItems()}</Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
