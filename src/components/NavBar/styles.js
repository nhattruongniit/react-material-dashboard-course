import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: `${process.env.REACT_APP_DRAWER_WIDTH}px`
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    color: 'inherit',
    fontSize: 20,
    '& img': {
      width: 36,
      height: 36,
      marginRight: 16,
    },
    '& a': {
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
      flexShrink: 0,
    },
  },
}));

export default useStyles;
