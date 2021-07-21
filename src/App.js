import { useState } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';

// components
import TopBar from 'components/TopBar/TopBar';
import NavBar from 'components/NavBar/NavBar';

// views
import UserList from 'views/users/UserList';
import UserAdd from 'views/users/UserAdd';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${process.env.REACT_APP_DRAWER_WIDTH}px`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));


function App() {
  const classes = useStyles();
  const [isDrawer, setIsDrawer] = useState(true);

  function handleToogleDrawer() {
    setIsDrawer(!isDrawer);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopBar isDrawer={isDrawer} handleToogleDrawer={handleToogleDrawer} />
      <NavBar isDrawer={isDrawer} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawer,
        })}
      >
        <div className={classes.toolbar} />

        <Route path="/user/list" component={UserList} />
        <Route path="/user/add" component={UserAdd} />

      </main>
    </div>
  );
}

export default App;
