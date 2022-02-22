import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoItem } from "../TodoItem/index.jsx";
import { TodoList } from "../TodoList/index.jsx";
import { TodoSearch } from "../TodoSearch/index.jsx";
import { Modal } from '../Modal';

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
      <TodoSearch />

      <TodoList>
        {error && <p>error</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
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
          <p>ASDASDASD</p>
          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
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