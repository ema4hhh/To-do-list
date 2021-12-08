import "./CreateTodoButton.css";

export const CreateTodoButton = (props) => {
  const onAdd = () => {
    if (!document.getElementById('formContainer')){
      let root = document.getElementById('root')
      let container = document.createElement('div');
        container.id = 'formContainer';
      root.appendChild(container);
      var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter your new task";
        input.className = "addTaksForm";
        input.id = "addTaksForm";
      container.appendChild(input);
    } else if (!document.getElementById("addTaksForm")) {
      let container = document.getElementById("formContainer");
      let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter your new task";
        input.className = "addTaksForm";
        input.id = "addTaksForm";
      container.appendChild(input);
    } else {
      let container = document.getElementById("formContainer");
      container.remove(input);
    }
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        id="CreateTodoButton"
        onClick={onAdd}
      >
        +
      </button>
    </>
  );
};
