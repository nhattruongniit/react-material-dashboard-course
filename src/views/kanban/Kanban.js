import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function Kanban() {
  return (
    <div>
      <h2>Kaban</h2>
      <Paper variant="outlined">
        <Box m={2}>
          <Grid md={12}>
            this is kanban todo
          </Grid>
            
        </Box>
      </Paper>
    </div>
  )
}

export default Kanban
