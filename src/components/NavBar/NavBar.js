import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';


// assets
import LogoImg from 'assets/images/logo.png'

// styles
import useStyles from './styles';

function NavBar({ isDrawer }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Link to='/' className={classes.navBar_link}>
          <img src={LogoImg} alt="Logo" title="logo" />
          Material UI
        </Link>
      </div>

      <Divider />
      
      <List component="nav" aria-label="list main">
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => history.push('/kanban')}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem button onClick={() => history.push('/user/list')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavBar
