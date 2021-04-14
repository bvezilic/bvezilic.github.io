import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import MLProjectCard from './MLProjectCard';
import { mlProjects } from '../data';


const useStyles = makeStyles({
  root: {
    padding: 20,
  }
});

export default function MLProjectList(props) {
  const classes = useStyles();

  const listItems = mlProjects.map((item) =>
    <Grid item sm={12} md={6}>
      <MLProjectCard 
        key={item.name} 
        name={item.name} 
        description={item.description} 
        repo={item.repo}
        image={item.image}
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