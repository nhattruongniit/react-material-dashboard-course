import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';

// styles
import useStyles from './styles';

function NavBar({ isDrawer }) {
  const classes = useStyles();

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
          <img src="/assets/images/logo.png" alt="Logo" title="logo" />
          Material UI
        </Link>
      </div>
      <Divider />
      dsadasds
    </Drawer>
  )
}

export default NavBar
