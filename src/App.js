import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList:["need to work on react js"]
    }
    this.todosCount = this.todosCount.bind(this);
  }
  todosCount(data){
    this.setState({
      todoList: data
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="content">
          <Content todosCount={this.todosCount} contentProps={this.state.todoList}/>
        </div>
        <div className="footer">>
          <Footer countProps={this.state.todoList}/>
        </div> 
      </div>
    );
  }
}

export default App;
