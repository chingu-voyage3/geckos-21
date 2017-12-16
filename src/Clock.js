import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: function(){
        let dateObj = new Date();
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let col = ':';
        if(hours < 10) {
          hours = '0' + hours;
        }
        if(minutes < 10) {
          minutes = '0' + minutes;
        }
        let timeNow = `${hours}${col}${minutes}`
        return timeNow;
      }
    };
  }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillMount() {
      clearInterval(this.timerID);
    }

  tick() {
    this.setState({
      time: function(){
        let dateObj = new Date();
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let col = ':';
        if(hours < 10) {
          hours = '0' + hours;
        }
        if(minutes < 10) {
          minutes = '0' + minutes;
        }
        let timeNow = `${hours}${col}${minutes}`
        return timeNow;
      }
    });
  }

  render () {
    return (
      <div className="clock-div">
        <h1 className="clock-el">{this.state.time()}</h1>
      </div>
    );
  }
}
export default Clock;
