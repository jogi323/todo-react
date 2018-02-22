import React, { Component } from 'react';
import './content.css';
import TodoList from './todo-list/todo-list';

class Content extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		todoName: "",
  		todoList: this.props.contentProps
  	}
  	console.log(this.props.contentProps)
  	this.setChanges = this.setChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  setChanges(event){
  	this.setState({
        todoName: event.target.value
    });
  };
  handleSubmit(){
  	this.state.todoList.push(this.state.todoName);
  	this.props.todosCount(this.state.todoList);
  }

  render() {
    return (
      <div className="add-todo">
	      <div className="form-group">
	        <input className="form-control input" type="text" value={this.state.todoName} onChange={this.setChanges}/>
	        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Todo</button>
	  	  </div>
	  	  <TodoList list={this.state.todoList}/>
      </div>
    );
  }
}

export default Content;
