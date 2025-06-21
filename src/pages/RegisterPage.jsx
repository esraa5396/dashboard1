import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Checkbox,
  FormControlLabel,
  useTheme,
  useMediaQuery
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setApiError('');

    if (validateForm()) {
      setLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In real app, you would call your API here
        // const response = await registerApi(formData);
        
        // Redirect to login with success state
        navigate('/login', { state: { registrationSuccess: true } });
      } catch (error) {
        setApiError(error.message || 'Registration failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: { xs: '100vh', sm: 'auto' },
          padding: { xs: 1, sm: 0 },
          '& input': {
            fontSize: '16px !important'
          }
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            padding: { xs: 2, sm: 4 }, 
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px' },
            margin: { xs: 'auto', sm: 0 },
            touchAction: 'manipulation',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Box>

          {apiError && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {apiError}
            </Alert>
          )}

          <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
              mt: 3,
              '& .MuiButton-root': {
                minHeight: { xs: '48px', sm: 'auto' },
                fontSize: { xs: '1rem', sm: 'inherit' },
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                '&:active': {
                  transform: 'scale(0.98)',
                  transition: 'transform 0.1s ease'
                }
              }
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  disabled={loading}
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: { xs: '56px', sm: 'auto' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  disabled={loading}
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: { xs: '56px', sm: 'auto' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  disabled={loading}
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: { xs: '56px', sm: 'auto' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  disabled={loading}
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: { xs: '56px', sm: 'auto' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  disabled={loading}
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: { xs: '56px', sm: 'auto' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="acceptTerms"
                      color="primary"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      disabled={loading}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: { xs: '1.5rem', sm: '1.25rem' }
                        }
                      }}
                    />
                  }
                  label={
                    <span>
                      I agree to the <Link href="/terms" target="_blank">Terms and Conditions</Link>
                    </span>
                  }
                  sx={{
                    alignItems: 'flex-start',
                    '& .MuiFormControlLabel-label': {
                      fontSize: { xs: '0.875rem', sm: 'inherit' },
                      lineHeight: { xs: 1.4, sm: 1.5 }
                    }
                  }}
                />
                {errors.acceptTerms && (
                  <Typography color="error" variant="body2" sx={{ ml: 4, mt: 0.5 }}>
                    {errors.acceptTerms}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                py: { xs: 1.5, sm: 1.5 },
                px: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: 'inherit' },
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: 3,
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                WebkitUserSelect: 'none',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-1px)',
                  transition: 'all 0.2s ease'
                },
                '&:active': {
                  transform: 'translateY(0)',
                  boxShadow: 3
                },
                '&:disabled': {
                  opacity: 0.7
                },
                '@media (max-width: 600px)': {
                  '&:focus': {
                    outline: 'none'
                  }
                }
              }}
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign Up'
              )}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link 
                  href="/login" 
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: 'inherit' },
                    padding: { xs: '8px 4px', sm: '4px' },
                    display: 'inline-block',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;