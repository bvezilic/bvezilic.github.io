import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

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
