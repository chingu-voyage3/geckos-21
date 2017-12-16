import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      	<Quote  />
      </div>
    );
  }
}

export default App;
