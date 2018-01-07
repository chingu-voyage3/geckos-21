import React, { Component } from 'react';
import './Greeting.css';

class Greeting extends Component {
  constructor(){
    super();
    this.state  = {
      hours: (new Date()).getHours(),
      greet: ''
    }
  }
  componentDidMount() {
    var greeting = {...this.state};
    // console.log(greeting.hours);
    if (greeting.hours < 12) {
      this.setState(
        greeting = {
          greet: 'Good Morning'
        }
      )
    } else if (greeting.hours >= 12) {
      this.setState(
        greeting = {
          greet: 'Good Afternoon'
        }
      )
    } if (greeting.hours >= 17) {

    } else {
      this.setState(
        greeting = {
          greet: 'Good Evening'
        }
      )
    }

  }
  render() {
    return (
      <div className='greeting-wrapper'>{this.state.greet}</div>
    )
  }
}
export default Greeting;
