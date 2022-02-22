import "./CreateTodoButton.css";

export const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const onClickButton = () => {
    openModal ? setOpenModal(false) : setOpenModal(true)
  }
  return (
    <>
      <div>
        <button
          className="CreateTodoButton"
          id="CreateTodoButton"
          onClick={onClickButton}
        >
          +
        </button>
      </div>
    </>
  );
};