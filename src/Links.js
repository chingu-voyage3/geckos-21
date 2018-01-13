import React from 'react';
import './Links.css';

class Links extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }

  toggleClass = () => {
    
  }

  render() {
    return (
      <div className="react-parent">
        <div className="links-popup-container">
          <h1>some other thex</h1>
        </div>
        <button onClick={this.toggleClass} className="links-btn">Links</button>
      </div>
    )
  }
}

export default Links;
