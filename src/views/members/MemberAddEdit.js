import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

function MemberAddEdit() {
  const history = useHistory();
  const { id } = useParams();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-20'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={12}>
          <h2>{id ? 'Edit Member' : 'Add Member'}</h2>
        </Grid>
      </Grid>
      <Paper>
        <Box m={2}>
          <Grid container spacing={2}>
            <h3>Information</h3>
          </Grid>
          <Grid container spacing={4}>
            <Grid container item xs={12} md={12} alignItems="flex-end">
              <img src="https://cdn.fakercloud.com/avatars/jodytaggart_128.jpg" alt="Avatar" />
              <Button variant="outlined" size="small" color="primary" className="ml-20">
                Random Photo
              </Button>
            </Grid>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth variant="outlined" label="First Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth variant="outlined" label="Last Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth variant="outlined" label="Email" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth variant="outlined" label="Position" />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-join"
                    label="Date Join"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid>
            <h3>Advance</h3>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField fullWidth variant="outlined" label="Address" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">District</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="District"
                  value=""
                  fullWidth
                >
                  <MenuItem value="phunhuan">Phu Nhuan</MenuItem>
                  <MenuItem value="binhthanh">Binh Thanh</MenuItem>
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
                  value=""
                  fullWidth
                >
                  <MenuItem value="hcm">TP.HCM</MenuItem>
                  <MenuItem value="hn">HN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container item xs={12} md={12} justifyContent="flex-end">
              <Button color="primary">Add More</Button>
            </Grid>
            <br /> <br />
            <Grid container item xs={12} md={12} justifyContent="flex-end">
              <Button variant="outlined" color="primary" className="mr-20" onClick={() => history.goBack(-1)}>
                Cancel
              </Button>
              <Button color="primary" variant="contained" startIcon={<GroupAddIcon />}>
                {id ? 'Edit' : 'Add'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default MemberAddEdit;
