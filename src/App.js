import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContentContainer from './MainContentContainer/MainContentContainer.component.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainContentContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;

