import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Box, AppBar, Toolbar, Link, useTheme, useMediaQuery } from '@mui/material';
import dashboardImage from '../Images/dashboardImage.png'
import { useNavigate } from 'react-router-dom';
import InsightsIcon from '@mui/icons-material/Insights';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import './landingpage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => { handleMobileMenuClose(); navigate('/login'); }}>
        <Button color="secondary" variant="outlined" fullWidth sx={{ fontWeight: 600 }}>
          Sign In
        </Button>
      </MenuItem>
      <MenuItem onClick={() => { handleMobileMenuClose(); navigate('/signup'); }}>
        <Button color="secondary" variant="contained" fullWidth sx={{ fontWeight: 600 }}>
          Sign Up
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ 
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 1, sm: 1.5 },
            justifyContent: 'space-between'
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 0.5, sm: 1 }
            }}>
              <InsightsIcon sx={{ 
                fontSize: { xs: 28, sm: 32, md: 40 },
                color: 'secondary.contrastText'
              }} />
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                sx={{ 
                  ml: { xs: 0, sm: 2 },
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                }}
              >
                ELNESR
              </Typography>
            </Box>

            {/* <Search sx={{ 
              display: { xs: 'none', sm: 'block' },
              mx: { sm: 2, md: 3 }
            }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} /> */}
            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              <Button
                color="secondary"
                variant="signinbtn"
                onClick={() => navigate('/login')}
                sx={{ ml: 1, fontWeight: 600 }}
              >
                Sign In
              </Button>
              <Button
                color="secondary"
                variant="signupbtn"
                onClick={() => navigate('/register')}
                sx={{ ml: 1, fontWeight: 600 }}
              >
                Sign Up
              </Button>
              {/* Existing icons */}
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            {/* Mobile menu icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      {/* Main Landing */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          minHeight: { xs: '80vh', sm: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: { xs: '100%', md: '100%', lg: '100%' }
        }}
        
      >
        <Grid 
          container 
          spacing={{ xs: 4, sm: 6, md: 4 }} 
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column-reverse', md: 'row', lg: 'row' }}
          
        >
          <Grid item xs={12} md={6} lg={6}
          sx={{
            maxWidth: { xs: '100%', md: '40%', lg: '50%' }
          }}
          >
            <Box sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              px: { xs: 1, sm: 2 },
              
              
            }}>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                gutterBottom
                sx={{
                  fontSize: { 
                    xs: '2rem', 
                    sm: '2.5rem', 
                    md: '2.3rem', 
                    lg: '2.7rem' 
                  },
                  lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
                  mb: { xs: 2, sm: 3 }
                }}
              >
                Welcome to Our Dashboard
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.1rem', lg: '1.2rem' },
                  lineHeight: 1.6,
                  mb: { xs: 3, sm: 4 },
                  maxWidth: { xs: '100%', md: '90%' }
                }}
              >
                Monitor your data, generate reports, and manage everything from one place.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => navigate('/login')}
                color="secondary"
                sx={{
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  borderRadius: 2,
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}
          sx={{
            maxWidth: { xs: '100%', md: '40%', lg: '50%' },
          }}
          >
            <Box
              component="img"
              src={dashboardImage}
              alt="Dashboard Illustration"
              sx={{ 
                width: '100%', 
                maxWidth: { xs: 300, sm: 400, md: 500 },
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                },
                
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box 
        sx={{
          backgroundColor: theme.palette.footerbg.main,
          // backgroundAttachment: 'fixed',
          transition: 'transform 0.3s, filter 0.3s',
          boxShadow: 8,
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3 },
          borderTop: `1px solid ${theme.palette.divider}`,
          // background: `linear-gradient(135deg, ${theme.palette.tertiary.main} 0%, ${theme.palette.tertiary.light} 100%)`
        }}
      >
        <Container maxWidth="lg"
        
        >
          <Grid 
            container 
            spacing={{ xs: 3, sm: 4 }} 
            justifyContent="space-between" 
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                textAlign: { xs: 'left', sm: 'left', md: 'left' }, 
                mb: { xs: 3, md: 0 } ,
                
              }}>
                <InsightsIcon sx={{ 
                  fontSize: { xs: 32, sm: 36, md: 40 }, 
                  color: theme.palette.secondary.main, 
                  mb: 1 
                }} />
                <Typography 
                  variant="h6" 
                  fontWeight="bold" 
                  color="footerbg.secondary" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                  }}
                >
                  ELNESR Dashboard
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Empowering your data insights with modern analytics
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                textAlign: { xs: 'left', sm: 'left', md: 'left' }, 
                mb: { xs: 3, md: 0 } 
              }}>
                <Typography 
                  variant="h6" 
                  fontWeight="bold" 
                  color="footerbg.secondary" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5, 
                  alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' } 
                }}>
                  <Link 
                    href="#" 
                    underline="none" 
                    sx={{ 
                      color: 'text.secondary', 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      '&:hover': { 
                        color: 'secondary.main',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="#" 
                    underline="none" 
                    sx={{ 
                      color: 'text.secondary', 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      '&:hover': { 
                        color: 'secondary.main',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="#" 
                    underline="none" 
                    sx={{ 
                      color: 'text.secondary', 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      '&:hover': { 
                        color: 'secondary.main',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    Support
                  </Link>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                textAlign: { xs: 'left', md: 'left' },
                alignItems: 'flex-start' 
              }}>
                <Typography 
                  variant="h6" 
                  fontWeight="bold" 
                  color="footerbg.secondary" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
              
                  }}
                >
                  Contact Us
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Get in touch with our team
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 500
                  }}
                >
                  info@elnesr.com
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }} className='social-icons'>
                  <Link href="#"><FacebookIcon /></Link>
                  <Link href="#"><InstagramIcon /></Link>
                  <Link href="#"><TwitterIcon /></Link>
                  <Link href="#"><LinkedInIcon /></Link>
                  <Link href="#"><YouTubeIcon /></Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Box 
            sx={{ 
              borderTop: `2px solid ${theme.palette.divider}`, 
              mt: { xs: 3, sm: 4 }, 
              pt: { xs: 2, sm: 3 }, 
              textAlign: 'center' 
            }}
          >
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}
            >
              © {new Date().getFullYear()} EL NESR Dashboard. All rights reserved.
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              sx={{ 
                display: 'block', 
                mt: 1,
                fontSize: { xs: '0.7rem', sm: '0.75rem' }
              }}
            >
              Built with ❤️ for better data management
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;

