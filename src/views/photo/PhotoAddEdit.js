import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function PhotoAddEdit() {
  const history = useHistory();

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={12}>
          <h2>Photo Add</h2>
        </Grid>
        <Paper className="w-full">
          <Box m={2}>
            <Grid container item sm={12} spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Title"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Role"
                    value=""
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="sports">Sports</MenuItem>
                    <MenuItem value="nature">Nature</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography color="textSecondary" component="h3">Image</Typography>
                <br/>
                <img src="http://placeimg.com/640/480/fashion" alt="Avatar" width="100%" />
                <br />
                <Button variant="outlined" size="small" color="primary">
                  Random Photo
                </Button>
              </Grid>
              <Grid container item xs={12} justifyContent="flex-end">
                <Button variant="outlined" color="primary" className="mr-20" onClick={() => history.goBack(-1)}>
                  Cancel
                </Button>
                <Button color="primary" variant="contained" startIcon={<AddIcon />}>Add Photo</Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}