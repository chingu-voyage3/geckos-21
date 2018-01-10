import React from 'react';
import './Links.css';
import Container from './Container';

class Links extends React.Component {
  render() {
    return (
      <div className="react-parent">
        <Container className="links-container" />
        <div className="links-wrapper">Links</div>
      </div>
    )
  }
}

export default Links;
