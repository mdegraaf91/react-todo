import './TodoItem.css';
import { useState } from 'react';

export default function TodoItem({todo}) {

    /**
     * State
     */
    const [completed, setCompleted] = useState(todo.completed);
    
    const id = `todo-completed-${todo.id}`;

    return (
        <div className="todo__item">
            <input type="checkbox" id={id} name="todo-completed" checked={completed} onChange={e => setCompleted(e.target.checked)} />
            <label htmlFor={id} ><span></span>{todo.title}</label>
        </div>
    )
}
