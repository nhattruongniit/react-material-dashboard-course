import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.warning.main,
    color: '#fff',
    padding: '7px 16px',
  },
  cardHeaderInprocess: {
    backgroundColor: theme.palette.primary.main,
  },
  cardHeaderCompleted: {
    backgroundColor: theme.palette.success.main,
  },
  paper: {
    '& + &': {
      marginTop: 20,
    },
  },
}));

export default useStyles;
