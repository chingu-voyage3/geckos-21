import React from 'react';
import './ToDo.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: 'todo-popup-container-hidden',
      value: '',
      todoItems: [],
      strike: ''
    }
  }

  toggleClass = (event) => {
    let visible = {...this.state.visible};
    if(this.state.visible === 'todo-popup-container-hidden') {
      visible = 'todo-popup-container';
      this.setState({visible});
    } else {
      visible = 'todo-popup-container-hidden';
      this.setState({visible});
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: '',
      todoItems:[...this.state.todoItems, this.state.value]
    });
  }

  deleteTodoItem = (key) => {
    let todoItems = {...this.state.todoItems};
    delete todoItems[key];
    this.setState({todoItems});
  }

  renderList = (key) => {
    let listItem = this.state.todoItems[key];
    return(
          <li key={key}> {listItem} <i count={key} className="fa fa-times-circle" onClick={(event) => this.deleteTodoItem(key)}></i></li>
    )
  }

  render () {
    return (
      <div className="todo-wrapper">
        <div className={this.state.visible}>
          <ul className="todos-here">
            {Object.keys(this.state.todoItems).map(this.renderList)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.value} className="todo-input" type="text" placeholder="Write your todos here" />
          </form>
        </div>
        <button onClick={this.toggleClass} className="todo-btn">ToDo</button>
      </div>
    )
  }
}

export default ToDo;
