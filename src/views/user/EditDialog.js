import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function EditDialog({ openEditDialog, handleCloseEditDialog }) {
  const [role, setRole] = React.useState('operator');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openEditDialog}
      onClose={handleCloseEditDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select
              fullWidth
              labelId="select-role"
              id="select-role"
              label="Role"
              value={role}
              onChange={handleChange}
            >
              <MenuItem value="operator">Operator</MenuItem>
              <MenuItem value="collaborator">Collaborator</MenuItem>
            </Select>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
