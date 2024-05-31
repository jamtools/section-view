import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as types from './types'; // Ensure you have the correct path

type FilesProps = {
  files: types.File[]
}

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

export const Files: React.FC<FilesProps> = ({ files }) => {
  return (
    <Box sx={{ flexGrow: 1, height: '35vh' }}> {/* Set the height to 35% of the viewport height */}
      <GridContainer>
        <Grid container spacing={2} wrap="nowrap" style={{ height: '100%', flexWrap: 'nowrap' }}>
          {files.map((file) => (
            <Grid item xs={2.4} key={file.id} style={{ minWidth: '19%' }}> {/* Adjust minWidth to control item width */}
              <Item>
                {file.title}
                <br></br> <br></br>
                {file.numComments} Comments
              </Item>
            </Grid>
          ))}
        </Grid>
      </GridContainer>
    </Box>
  );
}
