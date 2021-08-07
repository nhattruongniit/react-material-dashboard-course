import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmDialog from './ConfirmDialog';
import EditDialog from './EditDialog';

function createData(avatar, name, email, role) {
  return { avatar, name, email, role };
}

const rows = [
  createData('https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg', 'Tony Nguyen', 'nhattruong1811@gmail.com', 'COLLABORATOR'),
  createData('https://cdn.fakercloud.com/avatars/okandungel_128.jpg', 'David Name', 'david@gmail.com', 'OPERATOR'),
];

export default function User() {
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  
  return (
    <>
      <Grid item xs={12}>
        <Grid item sm={8}><h2>User</h2></Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="user list">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell width="10%">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell scope="row">
                  <img src={row.avatar} alt="Avatar" width="50px" />
                </TableCell>
                <TableCell scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="edit user" component="span" onClick={handleClickOpenEditDialog}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="delete user" component="span" onClick={handleClickOpen}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmDialog open={open} handleClose={handleClose} />

      <EditDialog openEditDialog={openEditDialog} handleCloseEditDialog={handleCloseEditDialog} />
    </>
    
  );
}