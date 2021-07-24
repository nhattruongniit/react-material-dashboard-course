import { useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

import Pagination from 'components/Pagination/Pagination';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(avatar, name, email, role) {
  return { avatar, name, email, role };
}

const rows = [
  createData('https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg', 'Tony Nguyen', 'nhattruong1811@gmail.com', 'ADMIN'),
  createData('https://cdn.fakercloud.com/avatars/okandungel_128.jpg', 'David Name', 'david@gmail.com', 'OPERATOR'),
];

export default function UserList() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={8}><h2>User</h2></Grid>
        <Grid container item sm={4} justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => history.push('/user/add')}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
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
                  <IconButton color="primary" aria-label="edit user" component="span">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination />
    </>
    
  );
}