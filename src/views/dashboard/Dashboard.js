import React from 'react';
import Chart from "react-apexcharts";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
});

function createData(status, number) {
  return { status, number };
}

const rows = [
  createData('Meat', 44),
  createData('Vegetable', 55),
  createData('Rice', 13)
];

function createDataTodo(title, author, status) {
  return { title, author, status};
}

const todos = [
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 'Completed'),
];

function createDataUser(email, role) {
  return { email, role};
}

const users = [
  createDataUser('nhattruong1811@gmail.com', 'Admin'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('khanh@gmail.com', 'Lead'),
  createDataUser('minh@gmail.com', 'Collaborator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
];


const options = {
  chart: {
    type: 'pie',
  },
  labels: ['Meat', 'Vegetable', 'Rice'],
}

const series = [44, 55, 13];

function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <h2>Report</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={2}>
              <Grid container item xs={12}><h2>Products</h2></Grid>
              <Grid container justifyContent="space-between">
                <Grid item xs={12} sm={12} md={4}>
                  <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell align="right"/>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, idx) => (
                          <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                              {row.status}
                            </TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid container justifyContent="center" item xs={12} sm={12} md={6}>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          name="legend"
                          color="primary"
                        />
                      }
                      label="Legend"
                    />
                    <br />
                    <Chart options={options} series={series} type="pie" width={500} />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todos.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.author}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {row.email}
                      </TableCell>
                      <TableCell>{row.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
