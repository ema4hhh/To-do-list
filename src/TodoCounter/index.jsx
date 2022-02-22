import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
  const { totalTodos, completedTodos} = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">You've completed {completedTodos} of {totalTodos} To-do</h2>
  );
}

export { TodoCounter };