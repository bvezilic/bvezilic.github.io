import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import DrawingCard from './DrawingCard';
import { drawings } from '../data';


const useStyles = makeStyles({
  root: {
    padding: 20,
  }
});

export default function DrawingList(props) {
  const classes = useStyles();

  const listItems = drawings.map((item) =>
    <Grid item sm={12} md={6}>
      <DrawingCard 
        key={item.name} 
        name={item.name} 
        description={item.description} 
        image={item.image}
        pdf={item.pdf}/>
    </Grid>
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {listItems}
      </Grid>
    </div>
  )
}