import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { 
  Button, 
  CardContent, 
  CardActions,
  CardMedia, 
  Typography 
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  media: {
    minHeight: 64,
    minWidth: 64,
    height: '100%',
    width: 250,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function DrawingCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
          <Typography color="textSecondary" component="p">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button href={props.pdf} startIcon={<PictureAsPdfIcon />}>pdf</Button>
        </CardActions>
      </div>
    </Card>
  )
}