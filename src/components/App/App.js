import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';
import Famousperson from '../famousperson/famousperson'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Header />
        <Famousperson />

      </div>
    );
  }
}

export default App;
