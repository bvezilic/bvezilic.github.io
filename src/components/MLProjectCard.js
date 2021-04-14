import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  CardContent, 
  CardActions, 
  CardMedia, 
  Typography 
} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      // display: 'flex',
      maxWidth: 345,
      margin: 6,
    },
    media: {
      height: 150,
      maxWidth: 150,
    },
  });
  
export default function MLProjectCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
        <Typography color="textSecondary" component="p">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button href={props.repo} startIcon={<GitHubIcon />}>Github</Button>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="bilosta"
        alt="pic"
      />
    </Card>
  )
}