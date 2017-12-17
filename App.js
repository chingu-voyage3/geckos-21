import React, { Component } from 'react';
import './App.css';

import ToDoButton from './Buttons/ToDoButton';
import WeatherButton from './Buttons/WeatherButton';
import LinksButton from './Buttons/LinksButton';
import SettingsButton from './Buttons/SettingsButton';


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
