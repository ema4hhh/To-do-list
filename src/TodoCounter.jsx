import './TodoCounter.css';

export const TodoCounter = ({ total, completed }) => {
    return (
        <>
            <h2 className="TodoCounter">You've completed {completed} of {total} tasksToDos!</h2>
        </>
    )
}
