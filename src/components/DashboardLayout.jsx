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
<<<<<<< Updated upstream
  Button
=======
  Button,
  Tooltip,
  IconButton
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  IntegrationInstructions
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
=======
  IntegrationInstructions,
  Menu,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;
>>>>>>> Stashed changes

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState(0);
<<<<<<< Updated upstream
=======
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(true);
>>>>>>> Stashed changes

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

<<<<<<< Updated upstream
=======
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

>>>>>>> Stashed changes
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
<<<<<<< Updated upstream
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
=======
          width: drawerOpen ? drawerWidth : collapsedDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerOpen ? drawerWidth : collapsedDrawerWidth,
>>>>>>> Stashed changes
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2f',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
<<<<<<< Updated upstream
            justifyContent: 'space-between'
=======
            justifyContent: 'space-between',
            transition: 'width 0.2s ease-in-out',
            overflowX: 'hidden'
>>>>>>> Stashed changes
          },
        }}
      >
        {/* Sidebar - Top */}
        <Box>
<<<<<<< Updated upstream
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
=======
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            {drawerOpen && (
              <Typography variant="h6" fontWeight="bold">
                Inventory
              </Typography>
            )}
            <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
              {drawerOpen ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Toolbar>

          <List>
            <ListItemButton onClick={() => navigate('/dashboard')}>
              <ListItemIcon><HomeOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Home" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            {/* Inventory with chevron and tooltip on hover when closed */}
            {drawerOpen ? (
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Inventory2OutlinedIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Inventory" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            ) : (
              <Tooltip
                title={
                  <Box>
                    <Box sx={{ p: 1, borderBottom: '1px solid #444' }}>
                      <Typography variant="subtitle2">Inventory</Typography>
                    </Box>
                    <Box sx={{ py: 1 }}>
                      <Box sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}>
                        <Typography variant="body2">Items</Typography>
                      </Box>
                      <Box sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}>
                        <Typography variant="body2">Item Groups</Typography>
                      </Box>
                      <Box sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}>
                        <Typography variant="body2">Inventory Adjustments</Typography>
                      </Box>
                    </Box>
                  </Box>
                }
                placement="right"
                arrow
                sx={{
                  '& .MuiTooltip-tooltip': {
                    bgcolor: '#1e1e2f',
                    color: '#fff',
                    p: 0,
                    minWidth: 200,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Inventory2OutlinedIcon sx={{ color: '#fff' }}/>
                  </ListItemIcon>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </Tooltip>
            )}

            <ListItemButton>
              <ListItemIcon><ShoppingCartOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Sales" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><LocalMallOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Purchases" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><IntegrationInstructionsOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Integrations" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><AssessmentOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Reports" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><DocumentScannerOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Documents" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <Divider sx={{ background: '#444', my: 1 }} />

            <ListItemButton>
              <ListItemIcon><SettingsOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Settings" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>

            <ListItemButton onClick={handleLogout}>
              <ListItemIcon><LogoutOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
              {drawerOpen && <ListItemText primary="Logout" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '300' } } }} />}
            </ListItemButton>
>>>>>>> Stashed changes
          </List>
        </Box>

        {/* Sidebar - Bottom Announcement */}
<<<<<<< Updated upstream
        <Box sx={{ p: 2, borderTop: '1px solid #333' }}>
          <Typography variant="body2" gutterBottom>
            Your Premium plan trial expires in 14 days.
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="small">
            Upgrade
          </Button>
        </Box>
=======
        {drawerOpen && (
          <Box sx={{ p: 2, borderTop: '1px solid #333' }}>
            <Typography variant="body2" gutterBottom>
              Your Premium plan trial expires in 14 days.
            </Typography>
            <Button variant="contained" color="primary" fullWidth size="small">
              Upgrade
            </Button>
          </Box>
        )}
>>>>>>> Stashed changes
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
