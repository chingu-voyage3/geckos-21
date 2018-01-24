import React from 'react';
import './Links.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


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
          <a href="https://www.google.com/" target="_blank"><i className="fa fa-google"></i> Google</a>
          <a href="https://github.com/" target="_blank"><i className="fa fa-github"></i> GitHub</a>
          <a href="https://stackoverflow.com/" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i> Stack Overflow</a>
        </div>
        <button onClick={this.toggleClass} className="links-btn">Links</button>
      </div>
    )
  }
}

export default Links;
