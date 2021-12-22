import './TodoCounter.css';

export const TodoCounter = ({ total, completed }) => {
    return (
        <>
            <h2 className="TodoCounter">You've completed {completed} of {total} tasks!</h2>
        </>
    )
}
