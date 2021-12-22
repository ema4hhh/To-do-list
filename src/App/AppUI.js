import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoItem } from "../TodoItem/index.jsx";
import { TodoList } from "../TodoList/index.jsx";
import { TodoSearch } from "../TodoSearch/index.jsx";

function AppUI({
  totalTodos,
  completedTodos,
  search,
  setSearch,
  searchedTodos,
  completeTodo,
  deleteTodo,
  onAdd
}) {
  return (
    <div>
      <TodoCounter 
        total={totalTodos} 
        completed={completedTodos} 
      />
      <TodoSearch 
        search={search} 
        setSearch={setSearch} 
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.status}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton 
        onAdd={onAdd}
      />
    </div>
  )
}

export {AppUI}