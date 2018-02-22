import React, { Component } from 'react';
import './todo-list.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    console.log(this.props.list);
  }
  render() {
    return (
      <div className="todos-list">
        {this.props.list.map((item)=> {
          return <div>{item}</div>
        })}
      </div>
    );
  }
}

export default TodoList;