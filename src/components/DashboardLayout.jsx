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
  Button,
  Tooltip,
  IconButton,
  Paper
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon
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
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import headerBg from '../Images/home-header-bg-zom-f063611a9d.svg';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState(0);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [salesOpen, setSalesOpen] = React.useState(false);
  const [purchasesOpen, setPurchasesOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => {
      if (!prev) { setSalesOpen(false); setPurchasesOpen(false); }
      return !prev;
    });
  };

  const handleSalesClick = () => {
    setSalesOpen((prev) => {
      if (!prev) { setOpen(false); setPurchasesOpen(false); }
      return !prev;
    });
  };

  const handlePurchasesClick = () => {
    setPurchasesOpen((prev) => {
      if (!prev) { setOpen(false); setSalesOpen(false); }
      return !prev;
    });
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const [searchCategory, setSearchCategory] = React.useState('Customers');
  const searchOptions = [
    'Customers',
    'Items',
    'Inventory Adjustments',
    'Sales Orders',
    'Packages',
    'Shipments',
    'Invoices',
    'Sales Receipts',
    'Sales Returns',
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  const [searchModalOpen, setSearchModalOpen] = React.useState(false);
  const handleOpenSearchModal = () => setSearchModalOpen(true);
  const handleCloseSearchModal = () => setSearchModalOpen(false);

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerOpen ? drawerWidth : collapsedDrawerWidth,
          flexShrink: 0,
          transition: 'width 0.2s',
          overflowX: 'hidden',
          [`& .MuiDrawer-paper`]: {
            width: drawerOpen ? drawerWidth : collapsedDrawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2f',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'width 0.2s',
            overflowX: 'hidden',
          },
        }}
      >
        {/* Sidebar - Top */}
        <Box>
          <Box sx={{ 
            px: 2, 
            pt: 4, 
            pb: 3, 
            minHeight: 80,
            overflow: 'visible',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            background: 'linear-gradient(135deg, #1e1e2f 0%, #2a2a3f 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
            }
          }}>
            {drawerOpen ? (
              <>
                {/* Logo and App Name */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, flexShrink: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.18)',
                      position: 'relative',
                      flexShrink: 0,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
                        zIndex: -1,
                        opacity: 0.18
                      }
                    }}
                  >
                    <Inventory2OutlinedIcon sx={{ color: '#fff', fontSize: 24, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                  </Box>
                  <Box sx={{ minWidth: 0, overflow: 'hidden', flexShrink: 1 }}>
                    <Typography sx={{ 
                      color: '#fff', 
                      fontWeight: 800, 
                      fontSize: 15, 
                      lineHeight: 1, 
                      fontFamily: 'Montserrat, Roboto, sans-serif',
                      textShadow: '0 2px 4px rgba(0,0,0,0.18)',
                      letterSpacing: '-0.5px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}>
                      INVENTORY
                    </Typography>
                    <Typography sx={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      fontWeight: 500, 
                      fontSize: 9, 
                      letterSpacing: 2, 
                      fontFamily: 'Montserrat, Roboto, sans-serif',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}>
                      MANAGEMENT
                    </Typography>
                  </Box>
                </Box>
                {/* Hamburger Menu Button */}
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    // background: 'rgba(255,255,255,0.18)',
                    color: '#fff',
                    borderRadius: 3,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1.5px solid rgba(255,255,255,0.18)',
                    // boxShadow: '0 2px 12px 0 rgba(102,126,234,0.10)',
                    ml: 1,
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.32)',
                      boxShadow: '0 6px 24px 0 rgba(102,126,234,0.18)',
                      borderColor: 'rgba(255,255,255,0.28)',
                      transform: 'translateY(-2px) scale(1.05)',
                    },
                  }}
                >
                  <MenuIcon sx={{ fontSize: 24, color: '#fff', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))' }} />
                </IconButton>
              </>
            ) : (
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    background: 'rgba(255,255,255,0.18)',
                    color: '#fff',
                    borderRadius: 3,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 2px 12px 0 rgba(102,126,234,0.10)',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.32)',
                      boxShadow: '0 6px 24px 0 rgba(102,126,234,0.18)',
                      borderColor: 'rgba(255,255,255,0.28)',
                      transform: 'translateY(-2px) scale(1.05)',
                    },
                  }}
                >
                  <MenuIcon sx={{ fontSize: 24, color: '#fff', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))' }} />
                </IconButton>
              </Box>
            )}
          </Box>

          <List>
            {/* Home */}
            {drawerOpen ? (
              <ListItemButton onClick={() => navigate('/dashboard')}>
                <ListItemIcon>
                  <HomeOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Home" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Home" placement="right">
                <ListItemButton onClick={() => navigate('/dashboard')}>
                  <ListItemIcon>
                    <HomeOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}

            {/* Inventory with chevron and tooltip on hover when closed */}
            {drawerOpen ? (
              <>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <Inventory2OutlinedIcon sx={{ color: '#fff' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Inventory" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('items')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Items" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }}/>
                      {hoveredItem === 'items' && (
                        <Tooltip title="New Item" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('itemGroups')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Item Groups" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'itemGroups' && (
                        <Tooltip title="New Item Group" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('inventoryAdjustments')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Inventory Adjustments" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'inventoryAdjustments' && (
                        <Tooltip title="New Adjustment" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ) : (
              <Tooltip
                title={
                  <Box>
                    <Box sx={{ py: 1 }}>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('items')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Items</Typography>
                        {hoveredItem === 'items' && (
                          <Tooltip title="New Item" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('itemGroups')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Item Groups</Typography>
                        {hoveredItem === 'itemGroups' && (
                          <Tooltip title="New Item Group" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('inventoryAdjustments')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Inventory Adjustments</Typography>
                        {hoveredItem === 'inventoryAdjustments' && (
                          <Tooltip title="New Adjustment" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
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
                    minWidth: 220,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
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

            {/* Sales */}
            {drawerOpen ? (
              <>
                <ListItemButton onClick={handleSalesClick}>
                  <ListItemIcon><ShoppingCartOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
                  {drawerOpen && <ListItemText primary="Sales" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />}
                  {drawerOpen && (salesOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={salesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('customers')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Customers" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'customers' && (
                        <Tooltip title="New Customer" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('salesOrder')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Sales Order" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'salesOrder' && (
                        <Tooltip title="New Sales Order" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('packages')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Packages" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'packages' && (
                        <Tooltip title="New Package" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('shipments')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Shipments" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'shipments' && (
                        <Tooltip title="New Shipment" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('invoices')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Invoices" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'invoices' && (
                        <Tooltip title="New Invoice" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('salesReceipts')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Sales Receipts" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'salesReceipts' && (
                        <Tooltip title="New Sales Receipt" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('paymentReceived')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Payment Received" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'paymentReceived' && (
                        <Tooltip title="New Payment Received" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('salesReturns')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Sales Returns" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'salesReturns' && (
                        <Tooltip title="New Sales Return" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('creditNotes')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Credit Notes" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'creditNotes' && (
                        <Tooltip title="New Credit Note" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ) : (
              <Tooltip
                title={
                  <Box>
                    <Box sx={{ py: 1 }}>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('customers')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Customers</Typography>
                        {hoveredItem === 'customers' && (
                          <Tooltip title="New Customer" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('salesOrder')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Sales Order</Typography>
                        {hoveredItem === 'salesOrder' && (
                          <Tooltip title="New Sales Order" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('packages')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Packages</Typography>
                        {hoveredItem === 'packages' && (
                          <Tooltip title="New Package" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('shipments')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Shipments</Typography>
                        {hoveredItem === 'shipments' && (
                          <Tooltip title="New Shipment" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('invoices')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Invoices</Typography>
                        {hoveredItem === 'invoices' && (
                          <Tooltip title="New Invoice" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('salesReceipts')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Sales Receipts</Typography>
                        {hoveredItem === 'salesReceipts' && (
                          <Tooltip title="New Sales Receipt" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('paymentReceived')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Payment Received</Typography>
                        {hoveredItem === 'paymentReceived' && (
                          <Tooltip title="New Payment Received" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('salesReturns')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Sales Returns</Typography>
                        {hoveredItem === 'salesReturns' && (
                          <Tooltip title="New Sales Return" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('creditNotes')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Credit Notes</Typography>
                        {hoveredItem === 'creditNotes' && (
                          <Tooltip title="New Credit Note" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
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
                    minWidth: 220,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                  {salesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </Tooltip>
            )}

            {/* Purchases */}
            {drawerOpen ? (
              <>
                <ListItemButton onClick={handlePurchasesClick}>
                  <ListItemIcon><LocalMallOutlinedIcon sx={{ color: '#fff' }} /></ListItemIcon>
                  {drawerOpen && <ListItemText primary="Purchases" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />}
                  {drawerOpen && (purchasesOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={purchasesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('vendors')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Vendors" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'vendors' && (
                        <Tooltip title="New Vendor" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('purchaseOrders')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Purchase Orders" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'purchaseOrders' && (
                        <Tooltip title="New Purchase Order" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('purchaseReceives')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Purchase Receives" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'purchaseReceives' && (
                        <Tooltip title="New Purchase Receive" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ 
                        pl: 9, 
                        transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          background: '#e3eafe',
                          borderLeft: '4px solid #667eea',
                          boxShadow: '0 2px 12px 0 rgba(102,126,234,0.10)',
                          '& .MuiListItemText-primary': {
                            color: '#334e68',
                            fontWeight: 700
                          },
                          '& .MuiSvgIcon-root': {
                            color: '#334e68'
                          }
                        }
                      }}
                      onMouseEnter={() => setHoveredItem('bills')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Bills" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'bills' && (
                        <Tooltip title="New Bill" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('paymentsMade')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Payments Made" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'paymentsMade' && (
                        <Tooltip title="New Payment Made" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                    <ListItemButton 
                      sx={{ pl: 9 }}
                      onMouseEnter={() => setHoveredItem('vendorCredits')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ListItemText primary="Vendor Credits" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '0.85rem', fontWeight: '300' } } }} />
                      {hoveredItem === 'vendorCredits' && (
                        <Tooltip title="New Vendor Credit" placement="bottom-start">
                          <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                            <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                          </ListItemIcon>
                        </Tooltip>
                      )}
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ) : (
              <Tooltip
                title={
                  <Box>
                    <Box sx={{ py: 1 }}>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('vendors')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Vendors</Typography>
                        {hoveredItem === 'vendors' && (
                          <Tooltip title="New Vendor" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('purchaseOrders')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Purchase Orders</Typography>
                        {hoveredItem === 'purchaseOrders' && (
                          <Tooltip title="New Purchase Order" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('purchaseReceives')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Purchase Receives</Typography>
                        {hoveredItem === 'purchaseReceives' && (
                          <Tooltip title="New Purchase Receive" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('bills')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Bills</Typography>
                        {hoveredItem === 'bills' && (
                          <Tooltip title="New Bill" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('paymentsMade')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Payments Made</Typography>
                        {hoveredItem === 'paymentsMade' && (
                          <Tooltip title="New Payment Made" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
                      </Box>
                      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#333' } }}
                        onMouseEnter={() => setHoveredItem('vendorCredits')}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Typography variant="body2" sx={{color: '#fff', flex: 1}}>Vendor Credits</Typography>
                        {hoveredItem === 'vendorCredits' && (
                          <Tooltip title="New Vendor Credit" placement="right">
                            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
                              <AddCircleOutlineOutlinedIcon sx={{fontSize: 'small', color: '#f0f0f0'}}/>
                            </ListItemIcon>
                          </Tooltip>
                        )}
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
                    minWidth: 220,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocalMallOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                  {purchasesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </Tooltip>
            )}

            {/* Integrations */}
            {drawerOpen ? (
              <ListItemButton>
                <ListItemIcon>
                  <IntegrationInstructionsOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Integrations" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Integrations" placement="right">
                <ListItemButton>
                  <ListItemIcon>
                    <IntegrationInstructionsOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}

            {/* Reports */}
            {drawerOpen ? (
              <ListItemButton>
                <ListItemIcon>
                  <AssessmentOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Reports" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Reports" placement="right">
                <ListItemButton>
                  <ListItemIcon>
                    <AssessmentOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}

            {/* Documents */}
            {drawerOpen ? (
              <ListItemButton>
                <ListItemIcon>
                  <DocumentScannerOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Documents" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Documents" placement="right">
                <ListItemButton>
                  <ListItemIcon>
                    <DocumentScannerOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}

            <Divider sx={{ background: '#666666', my: 1, mx: 1, borderColor: '#666666' }} />

            {/* Settings */}
            {drawerOpen ? (
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Settings" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Settings" placement="right">
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}

            {/* Logout */}
            {drawerOpen ? (
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutOutlinedIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Logout" slotProps={{ primary: { sx: { color: '#f0f0f0', fontSize: '1rem', fontWeight: '400' } } }} />
              </ListItemButton>
            ) : (
              <Tooltip title="Logout" placement="right">
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutOutlinedIcon sx={{ color: '#fff' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            )}
          </List>
        </Box>

      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh', width: { xs: '100vw', sm: 'auto' }, overflowX: 'hidden' }}>
        {/* Header */}
        <AppBar 
          position="static" 
          elevation={0} 
          sx={{ 
            color: '#222',
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#fff',
            backgroundImage: `url(${headerBg})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            py: 1,
          }}
        >
          <Toolbar variant='tbar' sx={{ 
            justifyContent: 'space-between', 
            minHeight: 70,
            px: 3,
          }}>
            {/* Left Section - Welcome & Breadcrumb */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#1a1a1a',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                    letterSpacing: '-0.5px',
                    textAlign: { xs: 'center', sm: 'left' },
                    width: '100%',
                  }}
                >
                  Welcome back, Esraa! 👋
                </Typography>
                <Typography 
                  variant="body3" 
                  sx={{ 
                    color: '#666', 
                    mt: 0.5,
                    fontSize: '0.75rem'
                  }}
                >
                  Here's what's happening with your inventory today
                </Typography>
              </Box>
            </Box>

            {/* Right Section - Search, Notifications, Profile */}
            
            {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}> */}
              <Paper sx={{ display: 'flex', alignItems: 'center', gap: 2, backgroundColor: 'transparent'}} variant='headerPaper'>
              {/* Search Bar */}
              <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f8f9fa', px: 2, py: 1, borderRadius: 3, border: '1px solid #e0e0e0', minWidth: 300, transition: 'all 0.2s ease', '&:hover': { borderColor: '#667eea', boxShadow: '0 2px 8px rgba(102, 126, 234, 0.1)' }, '&:focus-within': { borderColor: '#667eea', boxShadow: '0 2px 12px rgba(102, 126, 234, 0.15)', bgcolor: 'white' }, '@media (max-width:755px)': { display: 'none' } }}>
                <Search sx={{ fontSize: 20, color: '#888', mr: 1 }} />
                <Select
                  value={searchCategory}
                  onChange={e => setSearchCategory(e.target.value)}
                  variant="standard"
                  disableUnderline
                  sx={{
                    minWidth: 120,
                    fontSize: '0.95rem',
                    bgcolor: 'transparent',
                    mr: 1,
                    color: '#334e68',
                    fontWeight: 500,
                    '& .MuiSelect-select': {
                      p: 0,
                      pl: 1,
                      pr: 3,
                      bgcolor: 'transparent',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#888',
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        mt: 1,
                        borderRadius: 2,
                        boxShadow: '0 4px 24px rgba(60,72,100,0.10)',
                        minWidth: 200,
                        p: 0,
                      }
                    }
                  }}
                >
                  {searchOptions.map(option => (
                    <MenuItem key={option} value={option} sx={{ fontSize: '1rem', py: 1.2 }}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <InputBase 
                  placeholder={`Search in ${searchCategory} ( / )`}
                  sx={{ 
                    flex: 1,
                    fontSize: '0.875rem',
                    '& input': {
                      '&::placeholder': {
                        color: '#999',
                        opacity: 1
                      }
                    }
                  }} 
                />
              </Box>
              <IconButton sx={{ display: 'none', '@media (max-width:755px)': { display: 'flex' }, bgcolor: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: 3, p: 1.2 }} onClick={handleOpenSearchModal}>
                <Search sx={{ fontSize: 22, color: '#888' }} />
              </IconButton>

              <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
              {/* Notifications */}
              <IconButton
                sx={{
                  // bgcolor: '#f8f9fa',
                  // border: '1px solid #e0e0e0',
                  borderRadius: '50%',
                  p: 1.5,
                  position: 'relative',
                  '&:hover': {
                    bgcolor: '#eee',
                    color: 'white',
                    borderColor: '#667eea',
                    borderRadius: '50%',
                    
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      position: 'absolute',
                      top: -4,
                      right: -2,
                      bgcolor: '#ff4757',
                      color: 'white',
                      borderRadius: '50%',
                      width: 15,
                      height: 15,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      fontWeight: 600
                    }}
                  >
                    3
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>🔔</Typography>
                </Box>
              </IconButton>

              {/* Profile Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                
                <Avatar 
                  sx={{ 
                    width: 40, 
                    height: 40,
                    bgcolor: '#667eea',
                    fontWeight: 600,
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      borderColor: '#667eea'
                    }
                  }}
                  onClick={handleProfileMenuOpen}
                >
                  EA
                </Avatar>
                <Menu
                  anchorEl={profileMenuAnchor}
                  open={Boolean(profileMenuAnchor)}
                  onClose={handleProfileMenuClose}
                  PaperProps={{
                    elevation: 3,
                    sx: {
                      mt: 1.5,
                      minWidth: 230,
                      borderRadius: 3,
                      p: 0,
                      boxShadow: '0 8px 32px rgba(60,72,100,0.18)',
                      overflow: 'visible',
                    },
                  }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 2, borderBottom: '1px solid #f0f0f0' }}>
                    <Avatar sx={{ width: 40, height: 40, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#667eea' }}>EA</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', color: '#222' }}>Esraa Ahmed</Typography>
                      <Typography sx={{ fontSize: '0.7rem', color: '#888' }}>esraa@example.com</Typography>
                    </Box>
                  </Box>
                  <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1.5,paddingBottom: 1, gap: 2 }}>
                    <AccountCircleOutlinedIcon fontSize="small" sx={{ color: '#667eea' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '0.875rem', color: '#334e68' }}>View Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1, gap: 2 }}>
                    <SettingsOutlinedIcon fontSize="small" sx={{ color: '#667eea' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '0.875rem', color: '#334e68' }}>Account Settings</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1, gap: 2 }}>
                    <NotificationsNoneOutlinedIcon fontSize="small" sx={{ color: '#667eea' }} />
                    <Typography sx={{ ffontWeight: 400, fontSize: '0.875rem', color: '#334e68' }}>Notifications</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1, gap: 2 }}>
                    <SwitchAccountOutlinedIcon fontSize="small" sx={{ color: '#667eea' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '0.875rem', color: '#334e68' }}>Switch Account</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1, gap: 2 }}>
                    <HelpOutlineOutlinedIcon fontSize="small" sx={{ color: '#667eea' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '0.875rem', color: '#334e68' }}>Help Center</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => { handleProfileMenuClose(); handleLogout(); }} sx={{ py: 1, gap: 2 }}>
                    <LogoutOutlinedIcon fontSize="small" sx={{ color: '#e74c3c' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '0.875rem', color: '#e74c3c' }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              </Box>
              </Paper>
            {/* </Box> */}
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>

      <Dialog open={searchModalOpen} onClose={handleCloseSearchModal} fullWidth maxWidth="sm" sx={{ '& .MuiDialog-paper': { m: 2, borderRadius: 3 } }}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Box sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#222' }}>Search</Box>
          <IconButton onClick={handleCloseSearchModal}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f8f9fa', px: 2, py: 1, borderRadius: 3, border: '1px solid #e0e0e0', minWidth: 0, transition: 'all 0.2s ease', '&:hover': { borderColor: '#667eea', boxShadow: '0 2px 8px rgba(102, 126, 234, 0.1)' }, '&:focus-within': { borderColor: '#667eea', boxShadow: '0 2px 12px rgba(102, 126, 234, 0.15)', bgcolor: 'white' } }}>
            <Search sx={{ fontSize: 20, color: '#888', mr: 1 }} />
            <Select
              value={searchCategory}
              onChange={e => setSearchCategory(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                minWidth: 120,
                fontSize: '0.95rem',
                bgcolor: 'transparent',
                mr: 1,
                color: '#334e68',
                fontWeight: 500,
                '& .MuiSelect-select': {
                  p: 0,
                  pl: 1,
                  pr: 3,
                  bgcolor: 'transparent',
                },
                '& .MuiSvgIcon-root': {
                  color: '#888',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    boxShadow: '0 4px 24px rgba(60,72,100,0.10)',
                    minWidth: 200,
                    p: 0,
                  }
                }
              }}
            >
              {searchOptions.map(option => (
                <MenuItem key={option} value={option} sx={{ fontSize: '1rem', py: 1.2 }}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <InputBase 
              placeholder={`Search in ${searchCategory} ( / )`}
              sx={{ 
                flex: 1,
                fontSize: '0.875rem',
                '& input': {
                  '&::placeholder': {
                    color: '#999',
                    opacity: 1
                  }
                }
              }} 
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DashboardLayout;

