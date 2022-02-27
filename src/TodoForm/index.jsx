import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new to-do</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancel
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Add
          </button>
      </div>
    </form>
  )
}

export { TodoForm };