import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

function GridView({ data }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid container item xs={12} spacing={3} className="m-0">
      {data.map((row, idx) => (
        <Grid key={idx} item xs={12} md={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={row.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {row.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => history.push('/photo/edit/1')}>
                Edit
              </Button>
              <Button size="small" color="primary" onClick={() => history.push('/photo/detail')}>
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default GridView
