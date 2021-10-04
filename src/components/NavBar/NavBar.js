import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PhotoIcon from '@material-ui/icons/Photo';
import PersonIcon from '@material-ui/icons/Person';

// assets
import LogoImg from '@assets/images/logo.png';

// styles
import useStyles from './styles';

function NavBar({ mobileOpen, handleDrawerToggle }) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const renderDrawer = (
    <>
      <div className={classes.drawerHeader}>
        <Link to="/">
          <img src={LogoImg} alt="Logo" title="logo" />
          Material UI
        </Link>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => history.push('/photo/list')}>
          <ListItemIcon>
            <PhotoIcon />
          </ListItemIcon>
          <ListItemText primary="Photo" />
        </ListItem>
        <ListItem button onClick={() => history.push('/kanban')}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem button onClick={() => history.push('/member/list')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>
        <ListItem button onClick={() => history.push('/user')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {renderDrawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {renderDrawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavBar;
