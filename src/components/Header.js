import Box from '@material-ui/core/Box';

import littlehoof_banner from '../images/littlehoof_banner.jpg';


export default function Header(props) {
  return (
    <Box centered>
      <img src={littlehoof_banner} className="Header-banner" alt="underconstruction" />
    </Box>
  );
}