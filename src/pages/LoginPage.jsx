import React, { useState } from 'react';
import { 
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  CssBaseline,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff,
  Google,
  Facebook,
  GitHub
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: ''
    };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (validateForm()) {
      setLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, you would call your authentication API here
        // const response = await authApi.login(email, password);
        
        // Store token if login is successful
        // localStorage.setItem('token', response.token);
        // if (rememberMe) {
        //   localStorage.setItem('rememberMe', 'true');
        // }
        
        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        setApiError(error.message || 'Login failed. Please check your credentials and try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login functionality
    console.log(`Login with ${provider}`);
    // Typically you would use Firebase, Auth0, or other auth providers
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 3 }}>
            Sign In
          </Typography>
          
          {apiError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {apiError}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              disabled={loading}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              disabled={loading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <Grid container sx={{ mt: 1, mb: 2, alignItems: 'center'}}>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={rememberMe} 
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                      disabled={loading}
                    />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign In'
              )}
            </Button>
            
            <Divider sx={{ my: 2 }}>OR</Divider>
            
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Google />}
                  onClick={() => handleSocialLogin('google')}
                  disabled={loading}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Facebook />}
                  onClick={() => handleSocialLogin('facebook')}
                  disabled={loading}
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHub />}
                  onClick={() => handleSocialLogin('github')}
                  disabled={loading}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Loginpage;