import { useState } from 'react';
import './TodoSearch.css'

export const TodoSearch = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <div id="float-label">
      <input
        id="input"
        type="text"
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <label className={ isActive ? "Active" : ""} htmlFor="input">
        What will we do next?
      </label>
    </div>
  )
}
