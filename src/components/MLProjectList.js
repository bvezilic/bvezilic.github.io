import Grid from '@material-ui/core/Grid';

import MLProjectCard from './MLProjectCard';
import { mlProjects } from '../data';


export default function MLProjectList(props) {
  const listItems = mlProjects.map((item) =>
    <Grid item xs={12} sm={6} md={4}>
      <MLProjectCard 
        key={item.name} 
        name={item.name} 
        description={item.description} 
        repo={item.repo}
        image={item.image}
      />
    </Grid>
  );
  return (
    <div className="MLProjectList">
      <Grid container spacing={2}>
        {listItems}
      </Grid>
    </div>
  )
}