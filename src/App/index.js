import React, { useState } from "react";
import { AppUI } from "./AppUI";

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [search, setSearch] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.status).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].status ? (newTodos[todoIndex].status = false) : (newTodos[todoIndex].status = true);

    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text: text, status: false });
    console.log(text);
    saveTodos(newTodos);
  };

  return (
    <>
      <AppUI
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 
        search={search} 
        setSearch={setSearch} 
        searchedTodos={searchedTodos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo}
        onAdd={addTodo}
      />
    </>
  );
}

export default App;
