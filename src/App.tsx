import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%', // Adjust the height to take full available height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Ensure flex direction is row
  overflowX: 'auto', // Enable horizontal scrolling
  height: '100%', // Make sure it takes full available height
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, height: '35vh' }}> {/* Set the height to 80% of the viewport height */}
      <GridContainer>
        <Grid container spacing={2} wrap="nowrap" style={{ height: '100%', flexWrap: 'nowrap' }}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={2.4} key={index} style={{ minWidth: '19%' }}> {/* Adjust minWidth to control item width */}
              <Item>xs=2.4</Item>
            </Grid>
          ))}
        </Grid>
      </GridContainer>
    </Box>
  );
}
