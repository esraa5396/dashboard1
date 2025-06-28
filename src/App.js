import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import theme from './theme/theme';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  // Simple auth check (in a real app, you'd verify with your backend)
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path='/dashboard' element={<DashboardPage/>}/>
          {/* <Route 
            path="/" 
            element={
              isAuthenticated() ? 
                <Navigate to="/dashboard" replace /> : 
                <Navigate to="/login" replace />
            } 
          /> */}
          {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        /> */}
        
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
