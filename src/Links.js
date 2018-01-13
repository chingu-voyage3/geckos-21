import React from 'react';
import './Links.css';

class Links extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: 'links-popup-container-hidden'
    }
  }

  toggleClass = () => {
    let visible = {...this.state.visible};
    if(this.state.visible === 'links-popup-container-hidden') {
      visible = 'links-popup-container';
      this.setState({visible});
    } else {
      visible = 'links-popup-container-hidden';
      this.setState({visible});
    }
  }

  render() {
    return (
      <div className="react-parent">
        <div className={this.state.visible}>
          <h1>some other thex</h1>
        </div>
        <button onClick={this.toggleClass} className="links-btn">Links</button>
      </div>
    )
  }
}

export default Links;
