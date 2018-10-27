import React, { Component } from 'react';
import './App.css';
import MadLib from "./components/MadLib";

class App extends Component {

  render() {
    // console.log( this.state.madLib);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mad Lib</h1>
        </header>
        <MadLib />
      </div>
    );
  }
}

export default App;
