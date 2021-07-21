import React from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function UserAdd() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid sm="12"><h2>Add User</h2></Grid>
      </Grid>
      <Grid>
        <h3>Information</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Role"
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Operator</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br /><br />
      <Grid>
        <h3>Advance</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Address"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">District</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="District"
              fullWidth
            >
              <MenuItem value={10}>Phu Nhuan</MenuItem>
              <MenuItem value={20}>Binh Thanh</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="City"
              fullWidth
            >
              <MenuItem value={10}>TP.HCM</MenuItem>
              <MenuItem value={20}>HN</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={12} md={12} justifyContent="flex-end">
          <Button color="primary">Add More</Button>
        </Grid>
        <br />
        <Grid container item xs={12} md={12} justifyContent="flex-end">
          <Button variant="outlined" color="primary" className="mr-20">
            Cancel
          </Button>
          <Button color="primary" variant="contained" startIcon={<GroupAddIcon />}>Add User</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default UserAdd
