import Card from '@material-ui/core/Card';
import { 
  Button, 
  CardContent, 
  CardActions, 
  Typography 
} from '@material-ui/core';


export default function GuitarArrangementCard(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>{props.pdf}</Button>
      </CardActions>
    </Card>
  )
}