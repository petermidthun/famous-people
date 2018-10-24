import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      role: "role"
    }
  }


  render() {
    return (
      <div className="App">
        <Header />

        {this.state.name} is famous for {this.state.role}
      </div>
    );
  }
}

export default App;
