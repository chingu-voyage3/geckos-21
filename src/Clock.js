import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      id: '24h',
      button: 'AM/PM',
      time: () => {
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
        let timeNow = `${hours}${col}${minutes}`;
        return timeNow;
      },
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
    if( this.state.id === 'AM/PM') {
      this.setState({
        id: 'AM/PM',
        button: '24h',
        time: () => {
          let dateObj = new Date();
          let hours = dateObj.getHours();
          let minutes = dateObj.getMinutes();
          let col = ':';
          let ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          let strTime = `${hours}${col}${minutes}${ampm}`;
          return strTime;
        }
      });
    } else if (this.state.id === '24h') {
      this.setState({
        id: '24h',
        button: 'AM/PM',
        time: () => {
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
          let timeNow = `${hours}${col}${minutes}`;
          return timeNow;
      }
    });
  }
}

  toggleTime = () => {
    if( this.state.id === '24h') {
      this.setState({
        id: 'AM/PM',
        button: '24h',
        time: () => {
          let dateObj = new Date();
          let hours = dateObj.getHours();
          let minutes = dateObj.getMinutes();
          let col = ':';
          let ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          let strTime = `${hours}${col}${minutes}${ampm}`;
          return strTime;
        }
      });
    } else if (this.state.id === 'AM/PM') {
      this.setState({
        id: '24h',
        button: 'AM/PM',
        time: () => {
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
          let timeNow = `${hours}${col}${minutes}`;
          return timeNow;
      }
    });
  }
}

  render () {
    return (
      <div id={this.state.id} className="clock-div">
        {this.state.time()}
        <button onClick={this.toggleTime}>{this.state.button}</button>
      </div>
    );
  }
}
export default Clock;
