import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import underconstruction from './under_construction.png';
import littlehoof_banner from './littlehoof_banner.jpg';
import {mlProjects, guitarArrangements, drawings} from './data';
import { Button, Tab, Tabs, Typography } from '@material-ui/core';
import './App.css';



function App() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={5}>
        <Header />
        <ProjectPanel />   
      </Paper>
    </Container>
  );
}

function Header(props) {
  return (
    <Box centered>
      <img src={littlehoof_banner} className="Header-banner" alt="underconstruction" />
    </Box>
    // <div className="Header">
    //   <img src={underconstruction} className="Header-img" alt="underconstruction" />
    // </div>
  );
}

class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleMLP = this.handleMLP.bind(this);
    this.handlerGA = this.handlerGA.bind(this);
    this.handlerDraw = this.handlerDraw.bind(this);
    this.state = {tableState: "mlpList"};
  }

  handleMLP() {
    this.setState({tableState: "mlpList"});
  }

  handlerGA() {
    this.setState({tableState: "gaList"});
  }

  handlerDraw() {
    this.setState({tableState: "dwList"});
  }

  render() {
    const tableState = this.state.tableState;
    let currentList;
    if (tableState === "mlpList") {
      currentList = <MLProjectList />
    } else if (tableState === "gaList") {
      currentList = <GuitarArrangementList />
    } else if (tableState === "dwList") {
      currentList = <DrawingList />
    }

    return (
      <div>
        <MenuBar handlerMLP={this.handleMLP} handlerGA={this.handlerGA} handlerDraw={this.handlerDraw}/>
        {currentList}
      </div>
    );
  }
}

const tabsStyles = makeStyles({
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

function MenuBar(props) {
  const classes = tabsStyles();

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

function MLProjectList(props) {
  const listItems = mlProjects.map((item) =>
    <MLProjectItem key={item.name} name={item.name} description={item.description} repo={item.repo}/>
  );
  return (
    <div className="MLProjectList">
      {listItems}
    </div>
  )
}

function MLProjectItem(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>{props.repo}</Button>
      </CardActions>
    </Card>
  )
}

function GuitarArrangementList(props) {
  const listItems = guitarArrangements.map((item) =>
    <GuitarArrangementItem key={item.name} name={item.name} description={item.description} pdf={item.pdf}/>
  );
  return (
    <div className="GuitarArrangementList">
      {listItems}
    </div>
  )
}

function GuitarArrangementItem(props) {
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

function DrawingList(props) {
  const listItems = drawings.map((item) =>
    <DrawingItem key={item.name} name={item.name} description={item.description} img={item.image}/>
  );
  return (
    <div className="GuitarArrangementList">
      {listItems}
    </div>
  )
}

function DrawingItem(props) {
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

export default App;
