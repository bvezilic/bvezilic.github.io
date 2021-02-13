import underconstruction from './under_construction.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <MLProjectList />
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

function MenuBar(props) {
  return (
    <div className="MenuBar">
      <MenuButton value="ML Projects"/>
      <MenuButton value="Guitar Arrangements"/>
      <MenuButton value="Drawings"/>
    </div>
  )
}

function MenuButton(props) {
  return (
    <div className="MenuButton">
      <button>{props.value}</button>
    </div>
  )
}

function MLProjectList(props) {
  const items = [{name: "GAN", description: "Some random text"}]; // Probably the path to file?
  const listItems = items.map((item) =>
    <MLProjectItem key={item.name} name={item.name} description={item.description} />
  );
  return (
    <div className="MLProjectList">
      {listItems}
    </div>
  )
}

function MLProjectItem(props) {
    // Name of the project (maybe URL to the repo?)
    // Description (Probaby also based on repo describtion)
    // Some image? If avaialable, but probably not
  return (
    <div className="MLProjectItem">
      <header>{props.name}</header>
      <p>{props.description}</p>
    </div>
  )
}

function GuitarArrangementItem(props) {
  // Name of the song
  // Link to the pdf (for now) - can be on google drive, avaialable for download
  return (
    <div>
    </div>
  )
}

function DrawingItem(props) {
  // sample image (left-mini-box)
  // Name of the doodle
  // Short describtion what it is
  return (
    <div>
    </div>
  )
}

export default App;
