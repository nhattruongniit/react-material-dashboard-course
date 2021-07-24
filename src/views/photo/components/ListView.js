import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

function ListView({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="15%">Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell width="10%">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell scope="row">
                <img src={row.image} alt="Description" width={100} />
              </TableCell>
              <TableCell  scope="row">
                {row.title}
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
  )
}

export default ListView
 