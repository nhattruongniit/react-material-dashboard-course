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
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, category, price) {
  return { name, category, price };
}

const rows = [
  createData('Chicken', 'meat', '20.000 VND'),
  createData('Beef', 'meat', '50.000 VND'),
  createData('Chicken', 'meat', '20.000 VND'),
  createData('Beef', 'meat', '50.000 VND'),
  createData('Chicken', 'meat', '20.000 VND'),
  createData('Beef', 'meat', '50.000 VND'),
  createData('Chicken', 'meat', '20.000 VND'),
  createData('Beef', 'meat', '50.000 VND'),
  createData('Chicken', 'meat', '20.000 VND'),
  createData('Beef', 'meat', '50.000 VND'),
];

export default function UserList() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={8}>
          <h2>Product</h2>
        </Grid>
        <Grid item sm={4} className="text-right">
          <IconButton aria-label="list" component="span">
            <FormatListBulletedIcon />
          </IconButton>
          <IconButton aria-label="grid" component="span">
            <ViewComfyIcon />
          </IconButton>
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
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
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
    </>
    
  );
}