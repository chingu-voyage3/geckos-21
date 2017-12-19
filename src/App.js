import React, { Component } from 'react';
import './App.css';

import ToDoButton from './ToDoButton';
import WeatherButton from './WeatherButton';
import LinksButton from './LinksButton';
import SettingsButton from './SettingsButton';


class App extends Component {

  clickHandler = () => {
    console.log("Button was clicked!");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}><ToDoButton /></button>
        <button><WeatherButton/></button>
        <button><LinksButton/></button>
        <button><SettingsButton/></button>
      </div>
    );
  }
}

export default App;
