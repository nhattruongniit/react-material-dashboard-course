import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

// components
import Account from './components/Account';
import Language from './components/Language';
import DarkMode from './components/DarkMode';

// styles
import useStyles from './styles';

function TopBar({ isDrawer, handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <Toolbar>
      <Grid container alignItems="center">
        <Grid container item xs={6}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end">
          <Language {...classes} />
          <DarkMode />
          <Account {...classes} />
        </Grid>
      </Grid>
      
    </Toolbar>
  );
}

export default TopBar;
