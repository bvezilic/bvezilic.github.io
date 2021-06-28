import Card from '@material-ui/core/Card';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
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
    display: 'flex',
    height: '100%',
  },
  media: {
    flexShrink: 0,
    height: 200,
    width: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default function DrawingCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
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