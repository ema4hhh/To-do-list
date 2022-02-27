import React, { useContext } from "react";

import { CreateTodoButton, Modal, TodoContext, TodoCounter, TodoForm, TodoItem, TodoList, TodoSearch } from './index.js';

import './AppUI.css'

function AppUI() {
  const {
    error,
    loading,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch 
        placeHolder={ searchedTodos.length ? searchedTodos[0].text : 'Add your first to-do'}
      />

      <TodoList>
        {error && <p className="text">something went wrong, please send me an e-mail telling me about it <b>ema4hhh@gmail.com</b></p>}
        {loading && <p className="text">Loading, please wait</p>}
        {(!loading && !searchedTodos.length) && <p className="text">Add your first to-do</p>}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  )
}

export { AppUI };