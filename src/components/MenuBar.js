import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    background: 'black',
    fontFamily: "ccwild-words-roman",
  },
  indicator: {
    backgroundColor: 'white',
  },
  typography: {
    fontFamily: "mangatb",
  }
});

export default function MenuBar(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position='static'>
      <Tabs value={value} onChange={handleChange} centered classes={{root: classes.root, indicator: classes.indicator}}>
        <Tab onClick={props.handlerMLP} className={classes.typography} label="ML Projects"/>
        <Tab onClick={props.handlerGA} className={classes.typography} label="Guitar Arrangements"/>
        <Tab onClick={props.handlerDraw} className={classes.typography} label="Drawings"/>
      </Tabs>
    </AppBar>
  )
}