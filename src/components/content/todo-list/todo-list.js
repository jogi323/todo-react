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
    unique.forEach((ele,ind)=>{
      arr.push({owner:ele,values:[]});
      this.props.list.forEach(element => {
        if(ele === element.owner){
          arr[ind].values.push(element.name)
        }
      });
    });
    console.log(arr)
    this.setState({
      data:arr
    })
    console.log(this.state)
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
          {this.state.data.map((val, index) => {
            return <tbody><tr>Owner: {val.owner}</tr>
            {val.values.map((ele,index)=>{
               return <tr><td>{index + 1}</td>
                 <td>{ele}</td>
                 <td className="Edit">
                   <a>Edit</a>/
                   <a onClick={()=>this.deleteTodo(index)}>Delete</a>
                 </td></tr>
            })}
          </tbody>
              })}
        </table>

      </div>
    );
  }
}

export default TodoList;