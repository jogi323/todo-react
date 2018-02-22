import React, { Component } from 'react';
import './content.css';
import TodoList from './todo-list/todo-list';

class Content extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		todoName: "",
      todoList: this.props.contentProps,
      search:""
  	}
  	this.setChanges = this.setChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.deleteTodo = this.deleteTodo.bind(this); 
  	this.search = this.search.bind(this);
  }
  setChanges(event){
  	this.setState({
        todoName: event.target.value
    });
  };

  handleSubmit(){
    if(!this.state.todoList.includes(this.state.todoName) && this.state.todoName){
    this.state.todoList.push({name:this.state.todoName});
    this.setState({todoName : ""});
    this.props.todosCount(this.state.todoList);
    }
  }

  deleteTodo(index){
    this.state.todoList.splice(index,1);
  	this.props.todosCount(this.state.todoList);
  }

  search(event){
    this.setState({
        search: event.target.value
    });
    var query = this.state.search;
    var queryResult=[];
    this.state.todoList.forEach(function(item){
      if(item.name.toLowerCase().indexOf(query)!==-1)
      queryResult.push(item);
    });
  }

  render() {
    return (
      <div className="add-todo">
        <div className="add-search">
          <h4>Add new todo below:</h4>
          <div className="row form-group">
            <input className="form-control input" type="text" value={this.state.todoName} onChange={this.setChanges}/>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Todo</button>
          </div>
          
          <div>
            <h4>List of todo's</h4>
            <div className="search">
            <input className="input" type="text" value={this.state.search} onChange={this.search}/>
          </div>
          </div>
        </div>
        <TodoList list={this.state.todoList} deleteTodo={this.deleteTodo}/>
        
        {/* <table className="table">
          <thead>
            <tr>
              <th>S No</th>
              <th>Todo</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((item, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td className="Edit">
                  <a>Edit</a>/
                  <a onClick={()=>this.deleteTodo(index)}>Delete</a>
                </td>
              </tr>
            })
            }
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default Content;
