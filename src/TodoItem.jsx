import './TodoItem.css'

export const TodoItem = (props) => {
  const onComplete = () => {
    alert('You have done ' + props.text + '!')
  }
  const onDelete = () => {
    alert('You deleted ' + props.text)
  }

    return (
        <li className="TodoItem">
          <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={() => onComplete()}
            >
            √
          </span>
          <p 
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
          >
            {props.text}
          </p>
          <span 
            className="Icon Icon-delete"
            onClick={() => onDelete()}
            >
           🗑️
          </span>
        </li>
    );
}
