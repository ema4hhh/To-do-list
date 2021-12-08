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
  const [todos, setTodo] = useState(defaultTodos)
  const [search, setSearch] = useState('')

  const completedTodos = todos.filter(todo => !!todo.status).length;
  const totalTodos = todos.length;

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
        {todos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.status}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
