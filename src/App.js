import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Quote  />
        <Clock />
      </div>
    );
  }
}

export default App;
