import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Tabs,
  Tab,
  Divider,
  Button
} from '@mui/material';

import {
  Home,
  Inventory,
  ShoppingCart,
  Assessment,
  Settings,
  Logout,
  Search,
  LocalMall,
  DocumentScanner,
  AutoGraph,
  IntegrationInstructions
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2f',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          },
        }}
      >
        {/* Sidebar - Top */}
        <Box>
          <Toolbar>
            <Typography variant="h6" fontWeight="bold">
              Inventory
            </Typography>
          </Toolbar>

          <List>
            <ListItem sx={{cursor: 'pointer'}} button onClick={() => navigate('/dashboard')}>
              <ListItemIcon><Home sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}} button>
              <ListItemIcon><Inventory sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Inventory" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><ShoppingCart sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><LocalMall sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Purchases" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><IntegrationInstructions sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Integrations" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><Assessment sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><DocumentScanner sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItem>

            <Divider sx={{ background: '#444', my: 1 }} />

            <ListItem sx={{cursor: 'pointer'}}  button>
              <ListItemIcon><Settings sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>

            <ListItem sx={{cursor: 'pointer'}}  button onClick={handleLogout}>
              <ListItemIcon><Logout sx={{ color: '#fff' }} /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>

        {/* Sidebar - Bottom Announcement */}
        <Box sx={{ p: 2, borderTop: '1px solid #333' }}>
          <Typography variant="body2" gutterBottom>
            Your Premium plan trial expires in 14 days.
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="small">
            Upgrade
          </Button>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Header */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'black' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" color='primary'>Hello, Esraa Ahmed</Typography>
              <Tabs value={tabIndex} onChange={(e, newVal) => setTabIndex(newVal)} textColor="primary">
                <Tab label="Dashboard" />
                <Tab label="Getting Started" />
                <Tab label="Announcements" />
                <Tab label="Recent Updates" />
              </Tabs>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: '#f0f0f0',
                  px: 1,
                  borderRadius: 2,
                }}
              >
                <Search sx={{ fontSize: 20, color: '#888' }} />
                <InputBase placeholder="Search..." sx={{ ml: 1 }} />
              </Box>
              <Avatar sx={{ width: 32, height: 32 }}>E</Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
