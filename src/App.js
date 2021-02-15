import React from 'react';
import underconstruction from './under_construction.png';
import {mlProjects, guitarArrangements, drawings} from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectPanel />   
    </div>
  );
}

function Header(props) {
  return (
    <div className="Header">
      <img src={underconstruction} className="App-header" alt="underconstruction"/>
    </div>
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

function MenuBar(props) {
  return (
    <div className="MenuBar">
      <MenuButton onClick={props.handlerMLP} value="ML Projects"/>
      <MenuButton onClick={props.handlerGA} value="Guitar Arrangements"/>
      <MenuButton onClick={props.handlerDraw} value="Drawings"/>
    </div>
  )
}

function MenuButton(props) {
  return (
    <div className="MenuButton">
      <button onClick={props.onClick}>{props.value}</button>
    </div>
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
    <div className="MLProjectItem">
      <header>{props.name}</header>
      <p>{props.description}</p>
      <p>{props.repo}</p>
    </div>
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
    <div className="GuitarArrangementItem">
      <header>{props.name}</header>
      <p>{props.description}</p>
      <p>{props.pdf}</p>
    </div>
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
    <div className="DrawingItem">
      <header>{props.name}</header>
      <p>{props.description}</p>
      <p>{props.image}</p>
    </div>
  )
}

export default App;
