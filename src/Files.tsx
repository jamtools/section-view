import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { useGlobalStore } from './hooks/useGlobalStore';
import * as types from './types';
import { plural } from './utils';

type FilesProps = {
  files: types.FileData[]
}

export const Files: React.FC<FilesProps> = ({ files }) => {
  const globalStore = useGlobalStore();

  return (
    <Box className="files-container">
      <Box className="files-grid-container">
        <Grid container spacing={2} wrap="nowrap" className="files-grid">
          {files.map((file) => {
            const numComments = globalStore.getCommentsForFile(file.id).length;

            return (
              <Grid item xs={2.4} key={file.id} className="files-grid-item">
                <Paper className="files-item">
                  {file.title}
                  <br></br> <br></br>
                  {numComments}
                  {' '}
                  {plural('Comment', numComments)}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
