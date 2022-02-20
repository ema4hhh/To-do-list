import { useState } from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = (props) => {
  const [addTodo, setAddTodo] = useState('');

  const handleChange = (text) => {
    setAddTodo(text);
  }

  return (
    <>
      <div>
        <button
          className="CreateTodoButton"
          id="CreateTodoButton"
          onClick= {() => (props.onAdd(document.getElementById("addTodo").value))}
        >
          +
        </button>
      </div>
      <input
        className="addTask"
        id="addTodo"
        onChange = {(e) => handleChange(e.target.value)}
        value = {addTodo}
        placeholder = "Add your task here!"
      />
    </>
  );
};
