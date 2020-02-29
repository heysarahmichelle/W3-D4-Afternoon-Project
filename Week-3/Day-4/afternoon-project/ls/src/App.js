import React, { Component }from 'react';
import data from "./react-i-ii-afternoon/data"
import List from './Components/List'


export default class App extends Component {
  constructor(){
    super();
      this.state={
        employees: data,
        id: 0
      };
  }
  increaseId=()=>{
    if(this.state.id < this.state.employees.length-1){
    this.setState({
      id : this.state.id + 1
    })
  }
  }
  decreaseId=()=>{
    if(this.state.id > 0){
    this.setState({
    id : this.state.id -1
    })
  }
  }
  delete=()=>{

  }

  render(){
    return(
      <div>
        <List list={this.state.employees} id={this.state.id}/>
        <p>{this.state.id+1}/{this.state.employees.length}</p>
        <button onClick={this.decreaseId}>{'<'}Previous</button>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
        <button onClick={this.increaseId}>Next{'>'}</button>

       
      </div>
    )
  }
}


