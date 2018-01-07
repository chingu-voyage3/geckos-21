import React, { Component } from 'react';
import axios from 'axios';
import './Quote.css';

const config = {
  headers: {
    "X-Mashape-Key": "C2zLNiSRGBmshRU1yI9m2Emw8hXwp1IHM4tjsnSKXX2aazrf5w",
    Accept: "application/json",
     "Content-Type": "application/x-www-form-urlencoded"
  }
}

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      author: []
     };
  }

  componentWillMount() {
    this.setState(()=>{
      return {
        data: "loading...",
        author: ''
      }
    })
  }

  componentDidMount() {
    axios.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=", config)
    .then((response) => {
      this.setState(()=>{
        return {
          data: "'" + response.data.quote + "'",
          author:"- " + response.data.author
        }
      })
    })
    .catch(function(error) {
      console.log("error: " + error);
    })
  }

  render(){
    return (
      <div className="quote-div">
         <div className="quote-el">
           {this.state.data} {this.state.author}
         </div>
      </div>
      )
  }
}

export default Quote
