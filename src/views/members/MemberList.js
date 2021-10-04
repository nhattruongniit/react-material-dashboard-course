import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Pagination from 'components/Pagination/Pagination';
import ConfirmDialog from './ConfirmDialog';

function createData(avatar, name, email, position) {
  return { avatar, name, email, position };
}

const rows = [
  createData(
    'https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg',
    'Tony Nguyen',
    'nhattruong1811@gmail.com',
    'Software Engineer',
  ),
  createData('https://cdn.fakercloud.com/avatars/okandungel_128.jpg', 'David Name', 'david@gmail.com', 'Front End Developer'),
];

export default function MemberList() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={8}>
          <h2>Member</h2>
        </Grid>
        <Grid container item sm={4} justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => history.push('/member/add')}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="member table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Position</TableCell>
              <TableCell width="15%">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell scope="row">
                  <img src={row.avatar} alt="Avatar" width="50px" />
                </TableCell>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="edit user" component="span" onClick={() => history.push('/member/12')}>
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

      <Pagination />

      <ConfirmDialog open={open} handleClose={handleClose} />
    </>
  );
}
