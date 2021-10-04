import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import TopBar from '@components/TopBar/TopBar';
import NavBar from '@components/NavBar/NavBar';

// views
import MemberList from '@views/members/MemberList';
import MemeberAddEdit from '@views/members/MemberAddEdit';
import Dashboard from '@views/dashboard/Dashboard';
import Kanban from '@views/kanban/Kanban';
import PhotoList from '@views/photo/PhotoList';
import PhotoAddEdit from '@views/photo/PhotoAddEdit';
import PhotoDetail from '@views/photo/PhotoDetail';
import User from '@views/user/User';

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
          <Route path="/member/list" component={MemberList} />
          <Route path="/member/add" component={MemeberAddEdit} />
          <Route path="/member/:id" component={MemeberAddEdit} />
          <Route path="/photo/list" component={PhotoList} />
          <Route path="/photo/add" component={PhotoAddEdit} />
          <Route path="/photo/edit/:id" component={PhotoAddEdit} />
          <Route path="/photo/:id" component={PhotoDetail} />
          <Route path="/kanban" component={Kanban} />
          <Route path="/user" component={User} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
