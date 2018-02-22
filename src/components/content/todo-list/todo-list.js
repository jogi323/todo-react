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
  deleteTodo(index){
    console.log(index)
    console.log(this.state.data);
    this.state.data.splice(index,1)
    this.props.deleteTodo(this.state.data);
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="todos-list col-md-8">
        <table className="table">
          <thead>
            <tr>
              <th>S No</th>
              <th>Todo</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
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