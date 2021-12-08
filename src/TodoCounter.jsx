import './TodoCounter.css';

export const TodoCounter = ({ total, completed }) => {
    return (
        <>
            <h2 className="TodoCounter">You've completed {total} of {completed} tasksToDos!</h2>
        </>
    )
}
