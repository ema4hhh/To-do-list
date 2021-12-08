import './CreateTodoButton.css'

export const CreateTodoButton = () => {
    const onClickButton = () => {console.log('hola')}

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton()}
        >
            +
        </button>
    )
}
