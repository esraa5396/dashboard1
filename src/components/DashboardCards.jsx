import React, { useState, useEffect } from 'react';
import { Grid, Box, Card, Typography, Divider, Paper,Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,MenuItem,FormControl,Select,CircularProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const StatItem = ({ label, value, color = 'black' }) => (
//   <Box textAlign="center" flex={1} display="flex" flexDirection="column" alignItems="center">
//     <Typography variant="textcards2" sx={{ color, fontSize:{xs:'20px',sm:'20px',md:'35px'} }}>{value}</Typography>
//     <Typography variant="textcards" sx={{ color: '#777', mt: 1}}>{label}</Typography>
//   </Box>
// );

const StatItem = ({ item }) => {
  return (
    <Box sx={{display: 'flex', textAlign: 'center',px: 1 ,flexDirection:'column'}}>
      <Typography variant="h5" fontWeight="bold" sx={{ color: item.color, fontSize:{xs:'18px',md:'25px'} }}>
        {item.value}
      </Typography>
      {item.unit && (
        <Typography  sx={{fontSize:{xs:'8px',md:'10px'},color:'#8d99ae'}}>
          {item.unit}
        </Typography>
      )}
      <Typography variant='textcards' sx={{mt:1.5}} >
        {item.label}
      </Typography>
    </Box>
  );
};

// Mock data structure (replace with your actual API call)
const mockData = {
  salesActivity: {
    toBePacked: { value: 24, label: 'To Be Packed', unit: 'Qty', color: '#1976d2' },
    toBeShipped: { value: 18, label: 'To Be Shipped', unit: 'Pkgs', color: '#d32f2f' },
    toBeDelivered: { value: 12, label: 'To Be Delivered', unit: 'Pkgs', color: '#2e7d32' },
    toBeInvoiced: { value: 8, label: 'To Be Invoiced', unit: 'Qty', color: '#ed6c02' }
  },
  itemDetails: {
    lowStock: 5,
    itemGroups: 12,
    allItems: 100,
    activeItems: 15
  },
  inventorysummary:{
    QuantityInHand:25,
    QuantityToBeRecieved:32
  },
  topSelling:{
    "This Month": [],
    "Previous Month": [
      { id: 1, name: "Wireless Headphones Pro X", quantity: 45, revenue: 2250 },
      { id: 2, name: "Smart Watch Series 5", quantity: 32, revenue: 2560 },
      { id: 3, name: "Bluetooth Speaker Max", quantity: 28, revenue: 1400 },
      { id: 4, name: "Noise Cancelling Earbuds", quantity: 25, revenue: 1250 },
      { id: 5, name: "Fitness Tracker V2", quantity: 22, revenue: 1100 },
      { id: 6, name: "Wireless Charging Pad", quantity: 20, revenue: 600 },
      { id: 7, name: "USB-C Adapter Kit", quantity: 18, revenue: 360 }
    ],
    "This Year": [
      { id: 1, name: "Premium Laptop Ultra", quantity: 215, revenue: 150500 },
      { id: 2, name: "Flagship Smartphone Pro", quantity: 189, revenue: 113400 },
      { id: 3, name: "Tablet Plus", quantity: 156, revenue: 62400 },
      { id: 4, name: "Gaming Monitor 27\"", quantity: 132, revenue: 39600 },
      { id: 5, name: "Mechanical Keyboard", quantity: 128, revenue: 15360 }
    ]
  },
  salesData: [
    {
      channel: 'Online Store',
      draft: 5,
      confirmed: 12,
      packed: 10,
      shipped: 8,
      invoiced: 7
    },
    {
      channel: 'Retail',
      draft: 3,
      confirmed: 8,
      packed: 6,
      shipped: 5,
      invoiced: 4
    },
    {
      channel: 'Online Store',
      draft: 5,
      confirmed: 12,
      packed: 10,
      shipped: 8,
      invoiced: 7
    },
    {
      channel: 'Retail',
      draft: 3,
      confirmed: 8,
      packed: 6,
      shipped: 5,
      invoiced: 4
    }
  ],
  
  purchaseData: {
    "This Month": {
      quantityOrdered: 42,
      totalCost: 12500.50
    },
    "Previous Month": {
      quantityOrdered: 38,
      totalCost: 11200.75
    }
  },

  salesSummary: {
    "This Month": [
      { date: '01 Jul', sales: 0 },
      { date: '03 Jul', sales: 1500 },
      { date: '05 Jul', sales: 3200 },
      { date: '07 Jul', sales: 1800 },
      { date: '09 Jul', sales: 4200 },
      { date: '11 Jul', sales: 2800 },
      { date: '13 Jul', sales: 3900 },
      { date: '15 Jul', sales: 0 },
      { date: '17 Jul', sales: 0 },
      { date: '19 Jul', sales: 0 },
      { date: '21 Jul', sales: 0 },
      { date: '23 Jul', sales: 0 },
      { date: '25 Jul', sales: 0 },
      { date: '27 Jul', sales: 0 },
      { date: '29 Jul', sales: 0 },
      { date: '31 Jul', sales: 0 }
    ],
    "Previous Month": [
      { date: '01 jun', sales: 0},
      { date: '03 jun', sales: 1500},
      { date: '05 jun', sales: 3200}
    ]
  }
  
};



const DashboardCards = () => {
  // State for time period selection - separate for each section
  const [topSellingTimePeriod, setTopSellingTimePeriod] = React.useState('This Month');
  const [purchaseOrderTimePeriod, setPurchaseOrderTimePeriod] = React.useState('This Month');
  const [salesOrderTimePeriod, setSalesOrderTimePeriod] = React.useState('This Month');
  const [salesSummaryTimePeriod, setSalesSummaryTimePeriod] = React.useState('This Month');

  // Calculate total sales based on sales summary time period
  const currentSalesData = mockData.salesSummary[salesSummaryTimePeriod] || [];
  const totalSales = currentSalesData.reduce((sum, day) => sum + day.sales, 0);
  // const salesData = [
  //   {
  //     channel: 'Online Store',
  //     draft: 5,
  //     confirmed: 12,
  //     packed: 10,
  //     shipped: 8,
  //     invoiced: 7
  //   },
  //   {
  //     channel: 'Retail',
  //     draft: 3,
  //     confirmed: 8,
  //     packed: 6,
  //     shipped: 5,
  //     invoiced: 4
  //   }
  // ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    // Replace this with your actual API call
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real implementation, you would do:
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        // setItemData(data);
        
        // In real implementation, replace with:
        // const response = await fetch(`your-api-endpoint?period=${topSellingTimePeriod}`);
        // const data = await response.json();
        // setItems(data);
        setItems(mockData.topSelling[topSellingTimePeriod] || []);
        setData(mockData); // Using mock data for now
        setLoading(false);
        setLastRefresh(new Date());
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    // Set up automatic refresh every hour
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 3600000); // 1 hour (3600000 milliseconds)

    // Cleanup interval on component unmount or timePeriod change
    return () => clearInterval(refreshInterval);
  }, [topSellingTimePeriod]);



  const handleManualRefresh = () => {
    // Trigger immediate refresh
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setItems(mockData.topSelling[topSellingTimePeriod] || []);
        setData(mockData);
        setLoading(false);
        setLastRefresh(new Date());
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data) return null;

  if (error) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  // Calculate active items percentage
  const activePercentage = Math.round((data.itemDetails.activeItems / data.itemDetails.allItems) * 100);

  return (
    <Box sx={{ padding: 2, paddingTop: 0 }}>

      {/* Auto-refresh indicator */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2, 
        p: 1, 
        backgroundColor: '#f8f9fa', 
        borderRadius: 1,
        fontSize: '12px',
        color: '#666'
      }}>
        <span>
          Last updated: {lastRefresh.toLocaleTimeString()}
        </span>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span>Auto-refresh every hour</span>
          <button 
            onClick={handleManualRefresh}
            disabled={loading}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              background: loading ? '#f5f5f5' : '#fff',
              cursor: loading ? 'not-allowed' : 'pointer',
              color: loading ? '#999' : '#333'
            }}
          >
            {loading ? 'Refreshing...' : 'Refresh Now'}
          </button>
        </Box>
      </Box>
      
      {/* <Grid container spacing={2}> */}
        <Grid container spacing={3} mb={7} sx={{flexDirection:{sm:'column', md:'column', lg:'row'}}} >
          {/* Sales Activity */}
          <Grid item xs={12} md={12} lg={8} sx={{flex: { xs: 'unset', md: 1 },width:{xs:'100%'}, marginBottom:{xs: 5, lg: 0}}}>
            <Card variant="outlined">
              <Paper variant="headercards">
                <Typography fontWeight="bold" mb={1}>Sales Activity</Typography>
              </Paper>
              <Divider/>
              <Grid container p={1.8}>
                  {Object.entries(data.salesActivity).map(([key, item], idx, arr) => (
                  <Grid item xs={12} sm={6} md={3} key={key} spacing={1} flex={1}
                    sx={{ 
                      borderRight: { sm: 'none', md: idx !== arr.length - 1 ? '1px solid lightgray' : 'none'
                      },
                      my: 1,
                      py: 1
                    }}>
                      <StatItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* Inventory Summary */}
          <Grid item xs={12} md={12} sx={{flex: { xs: 'unset', md: 0.5 },width:{xs:'100%'}}} >
            <Card variant="outlined" sx={{ height:'100%', boxSizing: 'border-box'}}>
              <Paper variant="headercards">
                <Typography  fontWeight="bold" mb={1}>Inventory Summary</Typography>
              </Paper>
              <Divider/>
              <Box sx={{ p: 2, height: '75%', display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box display="flex" justifyContent="space-between" my={1} >
                  <Typography variant="textcards" >Quantity In Hand</Typography>
                  <Typography sx={{fontSize:{xs:'12px',md:'18px'}, fontWeight:'500'}}>{data.inventorysummary.QuantityInHand}</Typography>
                </Box>
                <Divider sx={{mb:2}}/>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="textcards">Quantity To Be Recieved</Typography>
                  <Typography sx={{fontSize:{xs:'12px',md:'18px'}, fontWeight:'500'}}>{data.inventorysummary.QuantityToBeRecieved}</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      


      <Grid container spacing={3} variant='gridbox' mb={7}>
        {/* Item Details */}
        <Grid item xs={12} md={8}  sx={{flex: { xs: 'unset', md: 1,mb:{xs:5,lg:0} }}}>
          <Card variant="outlined"  sx={{ height:'100%', boxSizing: 'border-box'}}>
            <Paper variant="headercards">
              <Typography  fontWeight="bold" mb={1}>Item Details</Typography>
            </Paper>
            <Divider/>
            <Grid container spacing={2} >
            <Grid size={6} display="flex" flexDirection="column" justifyContent="space-between" sx={{ p: 2, pr:{xs:'0',md:2} }} >
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ color: 'red', fontSize: {xs:'11px',md:'14px'} }}>Low Stock Items</Typography>
                <Typography fontWeight="bold" sx={{fontSize:{xs:'12px',md:'16px'}}}>{data.itemDetails.lowStock}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="#777" sx={{fontSize: {xs:'11px',md:'14px'}}}>All Item Groups</Typography>
                <Typography fontWeight="bold"  sx={{fontSize:{xs:'12px',md:'16px'}}}>{data.itemDetails.itemGroups}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" >
                <Typography color="#777" sx={{fontSize: {xs:'11px',md:'14px'}}}>All Items</Typography>
                <Typography fontWeight="bold"  sx={{fontSize:{xs:'12px',md:'16px'}}}>{data.itemDetails.allItems}</Typography>
              </Box>
            
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem  sx={{borderColor:'lightgray'}} />

            <Grid item xs={5} sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center' ,
            width:'40%'
          }}>
            <Typography color="#999" mb={1} sx={{textAlign:'center', justifyContent:'center'}}>Active Items</Typography>
            <Box sx={{ 
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CircularProgress 
                variant="determinate" 
                value={activePercentage}
                size={80}
                thickness={4}
                sx={{
                  color: theme => activePercentage > 50
                  ? theme.palette.success.main 
                  : activePercentage > 20
                    ? theme.palette.warning.main
                    : theme.palette.error.main,
                  position: 'relative',
                  transition: 'all 0.5s ease'
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography 
                  variant="caption" 
                  component="div" 
                  color={activePercentage > 0 ? "text.primary" : "text.secondary"}
                  sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
                >
                  {activePercentage > 0 ? `${activePercentage}%` : 'No Active Items'}
                </Typography>
                {activePercentage > 0 && (
                  <Typography 
                    variant="caption" 
                    color="text.secondary"
                    sx={{ fontSize: '0.6rem' }}
                  >
                    {data.itemDetails.activeItems} items
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Top Selling Items */}
        <Grid item xs={12} md={4} sx={{flex: { xs: 'unset', md: 0.8}}}>
          <Card variant="outlined" sx={{ height:'100%', boxSizing: 'border-box'}}>
          <Paper variant="headercards">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
              <Typography  fontWeight="bold">Top Selling Items</Typography>
              {/* <select value={timePeriod} onChange={handlePeriodChange} 
                style={{ 
                  fontSize: '12px', 
                  color: 'gray', 
                  border: 'none', 
                  background: 'transparent',
                  minWidth: '80px'
                }}>
                <option value="This Month">This Month</option>
                <option value="Previous Month">Previous Month</option>
                <option value="Previous Week">Previous Week</option>
                <option value="Previous Year">Previous Year</option>
                <option value="This Year">This Year</option>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="This Week">This Week</option>
              </select> */}

              
                <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
                  <Select
                    value={topSellingTimePeriod}
                    onChange={(e) => setTopSellingTimePeriod(e.target.value)}
                    sx={{
                      fontSize: '14px',
                      border: 'none',
                      background: 'transparent',
                      boxShadow: 'none',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      p: 0,
                      height: 32,
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { mt: 1, boxShadow: 2 }
                      }
                    }}
                  >
                    <MenuItem value="This Month">This Month</MenuItem>
                    <MenuItem value="Previous Month">Previous Month</MenuItem>
                    <MenuItem value="This Week">This Week</MenuItem>
                    <MenuItem value="Previous Week">Previous Week</MenuItem>
                    <MenuItem value="Previous Year">Previous Year</MenuItem>
                    <MenuItem value="This Year">This Year</MenuItem>
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Yesterday">Yesterday</MenuItem>
                  </Select>
                </FormControl>
            </Box>
          </Paper>
            <Divider/>

            {loading ? (
          <Box sx={{ 
            flex: 1,
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <CircularProgress size={24} />
          </Box>
        ) : error ? (
          <Box sx={{ 
            flex: 1,
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            p: 2 
          }}>
            <Typography color="error">Error: {error}</Typography>
          </Box>
        ) : items.length > 0 ? (
          <Box sx={{ 
            flex: 1,
            overflow: 'auto',
            maxHeight: '160px', // Adjust based on your needs
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            }
          }}>
            {items.map((item) => (
              <Box 
                key={item.id} 
                sx={{ 
                  p: 2,
                  borderBottom: '1px solid #f0f0f0',
                  '&:last-child': {
                    borderBottom: 'none'
                  }
                }}
              >
                <Typography variant='textcards' sx={{ fontWeight: 500, mb: 0.5 }}>{item.name}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="textcards" color="text.secondary">
                    Qty: {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.revenue.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ 
            flex: 1,
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            p: 2 
          }}>
            <Typography variant="body1" color="text.secondary">
              No items were invoiced in this time frame
            </Typography>
          </Box>
        )}
            
          </Card>
        </Grid>
      </Grid>
    {/* </Grid> */}
    {/* Purchase Order and Sales Order Section */}
    <Grid container spacing={3} variant='gridbox' mb={3} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Purchase Order */}
        <Grid item xs={12} sm={12} md={4} lg={3} sx={{ 
          mb: { xs: 3, md: 0 },
          order: { xs: 1, md: 1 },
          flex: { xs: 'unset', md: 0.4}
        }}>
          <Card variant="outlined" sx={{ 
            height: '100%', 
            boxSizing: 'border-box',
            minHeight: { xs: 'auto', md: '200px' }
          }}>
            <Paper variant="headercards" sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: { xs: 'wrap', md: 'nowrap', },
              gap: 1
            }}>
              <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>Purchase Order</Typography>
              {/* <select 
                value={timePeriod} 
                onChange={handlePeriodChange} 
                style={{ 
                  fontSize: '12px', 
                  color: 'gray', 
                  border: 'none', 
                  background: 'transparent',
                  minWidth: '80px'
                }}
              >
                <option value="This Month">This Month</option>
                <option value="Previous Month">Previous Month</option>
                <option value="Previous Week">Previous Week</option>
                <option value="Previous Year">Previous Year</option>
                <option value="This Year">This Year</option>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="This Week">This Week</option>
              </select> */}

              
                <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
                  <Select
                    value={purchaseOrderTimePeriod}
                    onChange={(e) => setPurchaseOrderTimePeriod(e.target.value)}
                    sx={{
                      fontSize: '14px',
                      border: 'none',
                      background: 'transparent',
                      boxShadow: 'none',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      p: 0,
                      height: 32,
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { mt: 1, boxShadow: 2 }
                      }
                    }}
                  > 
                  <MenuItem value="This Month">This Month</MenuItem>
                  <MenuItem value="Previous Month">Previous Month</MenuItem>
                  <MenuItem value="This Week">This Week</MenuItem>
                  <MenuItem value="Previous Week">Previous Week</MenuItem>
                  <MenuItem value="Previous Year">Previous Year</MenuItem>
                  <MenuItem value="This Year">This Year</MenuItem>
                  <MenuItem value="Today">Today</MenuItem>
                  <MenuItem value="Yesterday">Yesterday</MenuItem>
                  </Select>
                </FormControl>
            </Paper>
            <Divider />
            <Box sx={{ 
              py: { xs: 2, sm: 4 }, 
              px: { xs: 1, sm: 2 },
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              height: 'calc(100% - 60px)' // Adjust based on header height
            }}>
              <Typography variant="body2" sx={{ color: '#777', mb: 1, fontSize: { xs: '12px', sm: '14px' } }}>Quantity Ordered</Typography>
              <Typography variant="h4" sx={{ 
                color: 'deepskyblue', 
                fontWeight: 'bold',
                fontSize: { xs: '24px', md: '15px',lg:'32px' }
              }}>
                {data.purchaseData?.[purchaseOrderTimePeriod]?.quantityOrdered || 0}
              </Typography>
              <Divider sx={{ my: 2, width: '80%' }} />
              <Typography variant="body2" sx={{ color: '#777', mb: 1, fontSize: { xs: '12px', sm: '14px' } }}>Total Cost</Typography>
              <Typography variant="h5" sx={{ 
                color: 'deepskyblue', 
                fontWeight: 'bold',
                fontSize: { xs: '18px', md: '15px',lg:'24px' }
              }}>
                EGP{(data.purchaseData?.[purchaseOrderTimePeriod]?.totalCost || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </Typography>
            </Box>
          </Card>
        </Grid>
        
        {/* Sales Order */}
        <Grid item xs={12} sm={12} md={8} lg={9} sx={{ 
          order: { xs: 2, md: 2 },
          flex: { xs: 'unset', md: 1}
        }}>
          <Card variant="outlined" sx={{ 
            height: '100%', 
            boxSizing: 'border-box',
            minHeight: { xs: 'auto', md: '200px' }
          }}>
            <Box>
              <Paper variant="headercards">
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  gap: 1
                }}>
                  <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>Sales Order</Typography>
                  {/* <select style={{ 
                    fontSize: '12px', 
                    color: 'gray', 
                    border: '1px solid #F2F2F2',  
                    padding: '2px 8px', 
                    background: '#F2F2F2',
                    minWidth: '80px'
                  }}>
                    <option>This Month</option>
                    <option>Previous Month</option>
                    <option>Previous Week</option>
                    <option>Previous Year</option>
                    <option>This Year</option>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>This Week</option>
                  </select>
                 */}

                <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
                  <Select
                    value={salesOrderTimePeriod}
                    onChange={(e) => setSalesOrderTimePeriod(e.target.value)}
                    sx={{
                      fontSize: '14px',
                      border: 'none',
                      background: 'transparent',
                      boxShadow: 'none',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      p: 0,
                      height: 32,
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { mt: 1, boxShadow: 2 }
                      }
                    }}
                  >
                    <MenuItem value="This Month">This Month</MenuItem>
                    <MenuItem value="Previous Month">Previous Month</MenuItem>
                    <MenuItem value="This Week">This Week</MenuItem>
                    <MenuItem value="Previous Week">Previous Week</MenuItem>
                    <MenuItem value="Previous Year">Previous Year</MenuItem>
                    <MenuItem value="This Year">This Year</MenuItem>
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Yesterday">Yesterday</MenuItem>
                  </Select>
                </FormControl>
                </Box>
              </Paper>

              <TableContainer component={Paper} sx={{ 
                boxShadow: 'none',
                maxHeight: { xs: '250px', sm: '200px' },
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#555',
                }
              }}>
                <Table stickyHeader aria-label="sales order table" size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f7f9fb' }}>
                      <TableCell sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Channel</TableCell>
                      <TableCell align="center" sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Draft</TableCell>
                      <TableCell align="center" sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Confirmed</TableCell>
                      <TableCell align="center" sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Packed</TableCell>
                      <TableCell align="center" sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Shipped</TableCell>
                      <TableCell align="center" sx={{ 
                        fontWeight: 'bold', 
                        backgroundColor: '#f7f9fb',
                        fontSize: { xs: '11px', md: '14px' },
                        padding: { xs: '8px 4px', md: '16px' }
                      }}>Invoiced</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.salesData.length > 0 ? (
                      data.salesData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.channel}</TableCell>
                          <TableCell align="center" sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.draft}</TableCell>
                          <TableCell align="center" sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.confirmed}</TableCell>
                          <TableCell align="center" sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.packed}</TableCell>
                          <TableCell align="center" sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.shipped}</TableCell>
                          <TableCell align="center" sx={{ 
                            fontSize: { xs: '11px', md: '14px' },
                            padding: { xs: '8px 4px', md: '16px' }
                          }}>{row.invoiced}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                          <Typography variant="body1" color="textSecondary">
                            No sales were made in this time frame
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* NEW Sales Summary Chart - Styled to match the image */}
      <Grid item mt={7} xs={12} md={12} lg={12}>
        <Card variant="outlined" sx={{ minHeight: 340 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', width: '100%' }}>
            {/* Chart and header */}
            <Box sx={{ flex: 1, minWidth: 0, pb: 0 }}>
              <Paper variant="headercards" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography fontWeight="bold" sx={{ fontSize: 18 }}>Sales Order Summary (in EGP)</Typography>
                <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
                  <Select
                    value={salesSummaryTimePeriod}
                    onChange={(e) => setSalesSummaryTimePeriod(e.target.value)}
                    sx={{
                      fontSize: '14px',
                      border: 'none',
                      background: 'transparent',
                      boxShadow: 'none',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      p: 0,
                      height: 32,
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { mt: 1, boxShadow: 2 }
                      }
                    }}
                  >
                    <MenuItem value="This Month">This Month</MenuItem>
                    <MenuItem value="Previous Month">Previous Month</MenuItem>
                    <MenuItem value="This Week">This Week</MenuItem>
                    <MenuItem value="Previous Week">Previous Week</MenuItem>
                    <MenuItem value="Previous Year">Previous Year</MenuItem>
                    <MenuItem value="This Year">This Year</MenuItem>
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Yesterday">Yesterday</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
              <Box sx={{ height: 250, width: '100%' }}>
                {currentSalesData.some(item => item.sales > 0) ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={currentSalesData}
                      margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 12 }}
                        tickMargin={10}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `${value / 1000}K`}
                        domain={[0, 5000]}
                        ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                      />
                      <Tooltip 
                        formatter={(value) => [`EGP ${value.toLocaleString()}`, 'Sales']}
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#1976d2"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <Box sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'text.secondary',
                    fontSize: 16
                  }}>
                    <Typography>No data found.</Typography>
                  </Box>
                )}
              </Box>
            </Box>
            {/* Divider between chart and summary */}
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 0, my: 3, borderColor: '#eee', width: '1px' }} />
            {/* Total Sales Summary */}
            <Box sx={{ minWidth: 260, maxWidth: 320, width: { xs: '100%', md: 320 }, p: 3, background: '#f8fcff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', borderRadius: 2, border: '1px solid #f0f4f8', ml: { md: 0 }, mt: { xs: 2, md: 0 } }}>
              <Typography sx={{ fontWeight: 500, fontSize: 16, mb: 2 }}>Total Sales</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', background: '#eaf6ff', borderRadius: 2, p: 2, width: '100%' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#1976d2', mr: 2 }} />
                <Box>
                  <Typography sx={{ fontSize: 12, color: '#1976d2', fontWeight: 700, letterSpacing: 1 }}>DIRECT SALES</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 22, color: '#222', mt: 0.5 }}>
                    EGP{totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};

export default DashboardCards;
