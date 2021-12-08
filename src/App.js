import React, { useState } from 'react';
import { CreateTodoButton } from './CreateTodoButton.jsx';
import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';
import { TodoList } from './TodoList.jsx';
import { TodoSearch } from './TodoSearch.jsx';

var defaultTodos = [
  {text: "hacer la tarea1", status: true},
  {text: "hacer la tarea2", status: false},
  {text: "hacer la tarea3", status: false},
];


function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [search, setSearch] = useState('')

  const completedTodos = todos.filter(todo => !!todo.status).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].status ? newTodos[todoIndex].status=false : newTodos[todoIndex].status=true;
    
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        search={search}
        setSearch={setSearch}
      />
      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.status}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
