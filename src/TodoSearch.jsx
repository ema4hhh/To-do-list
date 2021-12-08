import { useState } from 'react';
import './TodoSearch.css'

export const TodoSearch = ({ search, setSearch }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const onSearch = (event) => {
    setSearch(event.target.value);
  }
  const handleTextChange = (text) => {
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
        value={search}
        onChange={(e) => {
          handleTextChange(e.target.value)
          onSearch(e)
        }}
      />
      <label className={ isActive ? "Active" : ""} htmlFor="input">
        What will we do next?
      </label>
    </div>
  )
}
