import React from 'react';
import './Links.css';

class Links extends React.Component {
  constructor(){
    super();
    this.state = {
      links: {
        gmail: "https://www.gmail.com"
      }
    }
  }
  render() {
    return (
      <div className="react-parent">
        <div className="links-popup-container">
          {this.state.links.gmail}
        </div>
        <div className="links-wrapper">Links</div>
      </div>
    )
  }
}

export default Links;
