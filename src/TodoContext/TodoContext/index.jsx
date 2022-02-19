import { createContext } from "react"

const todoContext = createContext();

function todoProvider(props) {
  return(
    <todoContext.Provider value={{
      
    }}>
      {props.children}
    </todoContext.Provider>
  );
}


<todoContext.Consumer></todoContext.Consumer>