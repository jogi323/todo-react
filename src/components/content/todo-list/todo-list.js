import React, { Component } from 'react';
import './todo-list.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.list
    }
    console.log(this.props.list)
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  deleteTodo(index){
    this.state.data.splice(index,1)
    this.props.deleteTodo(this.state.data);
  }
  render() {
    return (
      <div className="todos-list col-md-8">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {
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
        </table>

      </div>
    );
  }
}

export default TodoList;