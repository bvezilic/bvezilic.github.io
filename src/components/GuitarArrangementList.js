import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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