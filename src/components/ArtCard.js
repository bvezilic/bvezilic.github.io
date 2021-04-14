import Card from '@material-ui/core/Card';
import { 
  Button, 
  CardContent, 
  CardActions, 
  Typography 
} from '@material-ui/core';


export default function ArtCard(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>{props.image}</Button>
      </CardActions>
    </Card>
  )
}