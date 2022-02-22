import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
  const [isActive, setIsActive] = useState(false);
  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  const handleTextChange = (text) => {
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div id='float-label'>
      <input
        id='input'
        className="TodoSearch" 
        value={searchValue}
        onChange={(e) => {
          handleTextChange(e.target.value)
          onSearchValueChange(e)
        }}
      />
      <label className={ isActive ? "Active" : ""} htmlFor='input'>
        Find your to-do
      </label>
    </div>
  )
}

export {TodoSearch};
