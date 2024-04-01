import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

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