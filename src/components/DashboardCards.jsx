import React from 'react';
import { Grid, Box, Card, Typography, Divider } from '@mui/material';

const StatItem = ({ label, value, color = 'black' }) => (
  <Box textAlign="center" flex={1}>
    <Typography variant="h6" sx={{ color }}>{value}</Typography>
    <Typography variant="body2" sx={{ color: '#777' }}>{label}</Typography>
  </Box>
);

const DashboardCards = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Sales Activity */}
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>Sales Activity</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <StatItem label="TO BE PACKED" value="0" />
              <StatItem label="TO BE SHIPPED" value="0" color="red" />
              <StatItem label="TO BE DELIVERED" value="0" color="green" />
              <StatItem label="TO BE INVOICED" value="0" color="goldenrod" />
            </Box>
          </Card>
        </Grid>

        {/* Inventory Summary */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>Inventory Summary</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="#777">QUANTITY IN HAND</Typography>
                <Typography>0</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="#777">QUANTITY TO BE RECEIVED</Typography>
                <Typography>0</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Item Details */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>Item Details</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography sx={{ color: 'red', fontSize: '14px' }}>Low Stock Items</Typography>
                <Typography fontWeight="bold">0</Typography>
              </Box>
              <Box>
                <Typography color="#777">All Item Groups</Typography>
                <Typography fontWeight="bold">0</Typography>
              </Box>
              <Box>
                <Typography color="#777">All Items</Typography>
                <Typography fontWeight="bold">0</Typography>
              </Box>
              <Box>
                <Typography color="#999">Active Items</Typography>
                <Box sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: '4px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#999'
                }}>
                  No Active Items
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Top Selling Items */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">Top Selling Items</Typography>
              <Typography variant="body2" color="gray">This Month ▼</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography color="gray" align="center">
              No items were invoiced in this time frame
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCards;
