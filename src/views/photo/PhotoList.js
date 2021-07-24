import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

// components
import ListView from './components/ListView';
import GridView from './components/GridView';

function createData(image, title, category, price) {
  return { image, title, category, price };
}

const data = [
  createData('http://placeimg.com/640/480/sports', 'Sports 1', 'sports', '20.000 VND'),
  createData('http://placeimg.com/640/480/nature', 'Nature 2', 'nature', '50.000 VND'),
  createData('http://placeimg.com/640/480/sports', 'Sports 3', 'sports', '20.000 VND'),
  createData('http://placeimg.com/640/480/nature', 'Nature 4', 'nature', '50.000 VND'),
  createData('http://placeimg.com/640/480/fashion', 'Fashion 1', 'fashion', '20.000 VND'),
  createData('http://placeimg.com/640/480/sports', 'Sports 4', 'sports', '50.000 VND'),
  createData('http://placeimg.com/640/480/fashion', 'Fashion 4', 'fashion', '20.000 VND'),
  createData('http://placeimg.com/640/480/nature', 'Nature 1', 'nature', '50.000 VND'),
  createData('http://placeimg.com/640/480/fashion', 'Fashion 6', 'fashion', '20.000 VND'),
  createData('http://placeimg.com/640/480/sports', 'Sports 4', 'sports', '50.000 VND'),
];

export default function PhotoList() {
  const [modeView, setModeView] = useState('list')

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={8}>
          <h2>Photos</h2>
        </Grid>
        <Grid item sm={4} className="text-right">
          <IconButton color={modeView === 'list' ? 'primary' : 'default'} aria-label="list" component="span" onClick={() => setModeView('list')}>
            <FormatListBulletedIcon />
          </IconButton>
          <IconButton color={modeView === 'grid' ? 'primary' : 'default'} aria-label="grid" component="span" onClick={() => setModeView('grid')}>
            <ViewComfyIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            className="ml-10"
          >
            Add
          </Button>
        </Grid>
      </Grid>

      {modeView === 'list' ? <ListView data={data} /> : <GridView data={data} /> }
      
    </>
    
  );
}