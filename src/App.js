import React, {Component} from 'react';
import Quote from './Quote';
import './App.css';
import Clock from './Clock';
import Weather from './Weather';
import Greeting from './Greeting';
import Search from './Search';
import Container from './Container';

class App extends Component {

  render() {
    return (
    <div className="App">
      <div className="top-container">
        <Search />
        <Weather />
      </div>
      <div className="middle-container">
        <Clock/>
        <Greeting />
      </div>
      <div className="bottom-container">
        <Container />
        <Quote/>
      </div>
    </div>);
  }
}

export default App;
