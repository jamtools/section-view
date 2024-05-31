import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import * as types from './types'; // Ensure you have the correct path

type FilesProps = {
  files: types.File[]
}

export const Files: React.FC<FilesProps> = ({ files }) => {
  return (
    <Box className="files-container">
      <Box className="files-grid-container">
        <Grid container spacing={2} wrap="nowrap" className="files-grid">
          {files.map((file) => (
            <Grid item xs={2.4} key={file.id} className="files-grid-item">
              <Paper className="files-item">
                {file.title}
                <br></br> <br></br>
                {file.numComments} Comments
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
