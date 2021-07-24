import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import TopBar from 'components/TopBar/TopBar';
import NavBar from 'components/NavBar/NavBar';

// views
import UserList from 'views/users/UserList';
import UserAdd from 'views/users/UserAdd';
import Dashboard from 'views/dashboard/Dashboard'
import Kanban from 'views/kanban/Kanban'
import PhotoList from 'views/photo/PhotoList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${process.env.REACT_APP_DRAWER_WIDTH}px)`,
      marginLeft: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <TopBar handleDrawerToggle={handleDrawerToggle} />
      </AppBar>

      <NavBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/user/list" component={UserList} />
          <Route path="/user/add" component={UserAdd} />
          <Route path="/photo/list" component={PhotoList} />
          <Route path="/kanban" component={Kanban} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
