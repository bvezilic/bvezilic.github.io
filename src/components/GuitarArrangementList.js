import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import GuitarArrangementCard from './GuitarArrangementCard';
import { guitarArrangements } from '../data';


const useStyles = makeStyles({
  root: {
    padding: 20,
  }
});

export default function GuitarArrangementList(props) {
  const classes = useStyles();

  const listItems = guitarArrangements.map((item) =>
    <Grid item sm={12} md={6}>
      <GuitarArrangementCard 
        key={item.name} 
        name={item.name} 
        description={item.description}
        image={item.image}
        pdf={item.pdf}
        title={item.imageTitle}
      />
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