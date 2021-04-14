import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import littlehoof_banner from '../images/littlehoof_banner.jpg';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
  }
});

export default function Header(props) {
  const classes = useStyles();
  return (
    <Box centered>
      <img src={littlehoof_banner} className={classes.root} alt="Littlehoof-banner" />
    </Box>
  );
}