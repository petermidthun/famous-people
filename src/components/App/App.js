import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      role: "role"
    };
    this.nameChange = this.nameChange.bind(this);  //  Bind this to this in nameChange
    this.roleChange = this.roleChange.bind(this); 
  }

  nameChange(event){
    console.log(event.target.value);
    //  this.state.name = event.trigger.value;  THIS IS MUTATION...bad use next line insted
    this.setState({name: event.target.value})
  }

  roleChange(event){
    console.log(event.target.value);
    this.setState({role: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p><input onChange={this.nameChange} />  <input onChange={this.roleChange} /></p>
        <p>{this.state.name} is famous for {this.state.role}</p>
      </div>
    );
  }
}

export default App;
