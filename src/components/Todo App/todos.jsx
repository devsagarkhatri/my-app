import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import "./TodoItem.css";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  state = {
    todos: todosData,
  };
  handleChange(id) {
    var list = [ ...this.state.todos ];
    list[id-1].completed = !list[id-1].completed ;
    this.setState({todos:list});
  }
  handleDelete(id) {
    var i,list=[];
    if(this.state.todos[id-1].completed){
      for(i=0;i<this.state.todos.length;i++){
        if(i !== id-1){list.push(this.state.todos[i]);}
      }
      for(i=0;i<list.length;i++){
        list[i].id=i+1;
      }    
      this.setState({todos:list});
    }
    else{
      alert("Hit bull's eye to mark it as complete before deleting")
    }
  }    
    

  handleAdd(){
    var p = prompt("Please Enter Your New Task");
    if(p!==null && p!==""){
      // !this.state.todos.includes(p)
      if(!this.state.todos.includes(p)){        
        var list = [ ...this.state.todos ];
        list.push({id:list.length+1,text:p,completed:false});
        this.setState({todos:list});
      }
      else{
        alert("This task already exists !!")
      }
    }    
  }
  render() {
    const TodoItems = this.state.todos.map((Item) => (
      <TodoItem 
        key={Item.id} 
        item={Item} 
        handleChange={this.handleChange} 
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <React.Fragment>
        <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="main_head navbar-brand lm-auto rm-auto" href="#">
            Create Your Today's Task List
          </a>
        </nav>
        <div className="todo-list">
          <i className={this.state.todos.length>0 ? "":"hide"}>Hit bull's eye to mark it as complete.</i>
          {TodoItems}
          <br/>
          <button 
            className="btn btn-primary" 
            onClick={this.handleAdd} >New Task</button>        
        </div>
        
      </React.Fragment> 
    );
  }
}

export default Todos;
