import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Grid
} from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateEmail()) {
      setLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In real app, call your API here
        // await sendPasswordResetEmail(email);
        
        setSuccess(true);
      } catch (err) {
        setError(err.message || 'Failed to send reset link. Please try again.');
      } finally {
        setLoading(false);
      }
    }
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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LockResetIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {error}
            </Alert>
          )}

          {success ? (
            <Box sx={{ mt: 3 }}>
              <Alert severity="success" sx={{ mb: 2 }}>
                Password reset link has been sent to your email.
              </Alert>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Please check your inbox and follow the instructions to reset your password.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate('/login')}
              >
                Back to Login
              </Button>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Enter the email address associated with your account and we'll send you a link to reset your password.
              </Typography>
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
                error={!!error}
                helperText={error}
                disabled={loading}
              />
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
                  'Send Reset Link'
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    Remember your password? Sign in
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default ForgotPassword;