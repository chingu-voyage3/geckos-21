import React from 'react';
import './Container.css'

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "Lorem ipsum "
    }
  }
  render() {
    return (
      <div className="test">
        {this.state.content}
      </div>
    )
  }
}

export default Container;
