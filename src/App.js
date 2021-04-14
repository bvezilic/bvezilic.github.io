import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import './App.css';
import Header from './components/Header';
import ProjectPanel from './components/ProjectPanel';


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

export default App;
