import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function PhotoDetail() {
  return (
    <>
      <Grid container item sm={12} spacing={2}>
        <h2>Photo Detail</h2>
      </Grid>
      <Paper>
        <Box m={2}>
          <Grid container item xs={12} spacing={4}>
            <Grid item sm={4}><Typography variant="body" color="textSecondary" component="h4">Title</Typography></Grid>
            <Grid item sm={8}>Sports 1</Grid>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid item sm={4}><Typography variant="body" color="textSecondary" component="h4">Category</Typography></Grid>
            <Grid item sm={8}>Sports</Grid>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid item sm={4}><Typography variant="body" color="textSecondary" component="h4">Description</Typography></Grid>
            <Grid item sm={8}>Lizards are a widespread group of squamate reptiles </Grid>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid item sm={4}><Typography variant="body" color="textSecondary" component="h4">Image</Typography></Grid>
            <Grid item sm={8}><img src="http://placeimg.com/640/480/sports" alt="Avatar" /></Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  )
}

export default PhotoDetail
