import React from 'react';

import MenuBar from './MenuBar';
import MLProjectList from './MLProjectList';
import GuitarArrangementList from './GuitarArrangementList';
import ArtList from './ArtList';


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
      currentList = <ArtList />
    }

    return (
      <div>
        <MenuBar handlerMLP={this.handleMLP} handlerGA={this.handlerGA} handlerDraw={this.handlerDraw}/>
        {currentList}
      </div>
    );
  }
}

export default ProjectPanel;