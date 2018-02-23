import React, { Component } from 'react';
import './content.css';
import TodoList from './todo-list/todo-list';

class Content extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		todoName: "",
      todoList: this.props.contentProps,
      owner:"",
      searchedList:this.props.contentProps
  	}
  	this.setChanges = this.setChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.deleteTodo = this.deleteTodo.bind(this); 
    this.search = this.search.bind(this);
  	// this.duplicateCheck = this.duplicateCheck.bind(this);
  }
  setChanges(event){
  	this.setState({
        [event.target.name]: event.target.value
    });
  };

  duplicateCheck= ()=>{
    for(var i = 0 ;i < this.state.todoList.length;i++){
      var check = this.state.todoList[i].name === this.state.todoName ? false: true;
    }
    return check;
  }

  // checkOwner= ()=>{
  //   var obj; 
  //   var count=0;
  //   this.state.todoList.forEach((ele,ind)=>{
  //     if(ele.owner === this.state.owner){
  //       obj = {check:true,index:ind};
  //       count = 1;
  //       return ;
  //     }
  //   });
  //   if(count){
  //     return obj;
  //   }
  //   else {
  //     return false;
  //   }
  // }
 
  handleSubmit(event){
    event.preventDefault();
    if( this.state.todoName && this.state.owner){
    // var ownerCheck = this.checkOwner();
    // if(ownerCheck.check){
    //   this.state.todoList[ownerCheck.index].name.push(this.state.todoName);
    // }else{
    //   var arr =[];
    //     arr.push(this.state.todoName)
    //     var obj = {
    //       name:arr,
    //       owner:this.state.owner
    //     }
    //     this.state.todoList.push(obj);
    // }
    this.state.todoList.push({name:this.state.todoName,owner:this.state.owner});
    this.setState({todoName : "",owner:""});
    this.props.todosCount(this.state.todoList);
    }
  }

  deleteTodo(data,index,ind){
    this.state.todoList[index].name.splice(ind,1);
  	this.props.todosCount(this.state.todoList);
  }

  search(event){
    var queryResult=[];
    this.state.todoList.forEach(function(item){
      if(item.name.toLowerCase().indexOf(event.target.value)!==-1){
          queryResult.push(item);
      }
      
    });
    this.setState({
      searchedList: queryResult
    })
  }

  render() {
    return (
      <div className="add-todo">
        <div className="add-search">
          <h4>Add new todo below:</h4>
          <div className="row form-group">
            <input className="form-control input" name="todoName" type="text" placeholder="Task..." value={this.state.todoName} onChange={this.setChanges}/>
            <input className="form-control input" name="owner" type="text" placeholder="Owner..." value={this.state.owner} onChange={this.setChanges}/>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Todo</button>
          </div>
          
          <div>
            <h4>List of todo's</h4>
            <div className="search">
            <input className="input" type="text" value={this.state.search} onChange={this.search}/>
          </div>
          </div>
        </div>
        <TodoList list={this.state.searchedList} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default Content;
