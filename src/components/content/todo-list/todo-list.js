import React, { Component } from 'react';
import './todo-list.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.list
    }
    
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  componentWillReceiveProps(){
    console.log(this.props.list);
    var owners = this.props.list.map(a => a.owner);
    var unique = Array.from(new Set(owners));
    console.log(unique)
    var arr = [];
    unique.forEach(ele=>{
      this.props.list.forEach(element => {
        if(ele === element.owner){
          
        }
      });
    });
  }

  deleteTodo(index){
    this.props.deleteTodo(this.state.data);
  }
  render() {
    return (
      <div className="todos-list col-md-8">
        <table className="table table-striped">
          <thead>
            <tr></tr>
            <tr>
              <th>S No</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.props.list.map((val, index) => {
            return <tbody><tr>Owner: {val.owner}</tr>
            <tr><td>{index + 1}</td>
              <td>{val.name}</td>
              <td className="Edit">
                <a>Edit</a>/
                <a onClick={()=>this.deleteTodo(index)}>Delete</a>
              </td></tr> 
          </tbody>
              
              })}
          
        </table>

      </div>
    );
  }
}

export default TodoList;