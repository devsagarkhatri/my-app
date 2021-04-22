import React from "react";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./TodoItem.css";
function TodoItem(props) {
  return (
    <div className={props.item.completed===false? "todo-item" : "todo-item-check" }>
      {console.log(props.item.id)}
      <button 
        className="deletebtn btn "
        style={{background:"transparent"}}
        onClick={(event)=>props.handleDelete(props.item.id)}>⛔</button>{"  "}
      
      <input
        type="checkbox"
        className="checkboxClass"
        checked={props.item.completed}
        onChange={(event) => props.handleChange(props.item.id)}

      />

      <p>{props.item.text}</p>
      
    </div>
  );
}

export default TodoItem;
