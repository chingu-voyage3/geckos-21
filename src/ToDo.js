import React from 'react';
import './ToDo.css';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: 'todo-popup-container-hidden'
    }
  }

  toggleClass = () => {
    let visible = {...this.state.visible};
    if(this.state.visible === 'todo-popup-container-hidden') {
      visible = 'todo-popup-container';
      this.setState({visible});
    } else {
      visible = 'todo-popup-container-hidden';
      this.setState({visible});
    }
  }

  render () {
    return (
      <div className="todo-wrapper">
        <div className={this.state.visible}>
          <h1>some other thex</h1>
        </div>
        <button onClick={this.toggleClass} className="todo-btn">ToDo</button>
      </div>
    )
  }
}

export default ToDo;
