import './TodoList.css';
import './TodoAdd.css';
import { useState } from 'react';

import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ initialTodoList }) {

    /**
     * State 
     */
    const [todoList, setTodoList] = useState(initialTodoList);
    const [newTodo, setNewTodo] = useState('');


    /**
     * Methods
     */
    function add() {
        setTodoList([...todoList, create(newTodo)]);
        setNewTodo('');
    }

    function create(value) {
        return { title: value, completed: false };
    }

    function handleKeyDownEvent(event) {
        if (event.key === 'Enter') {
            add();
        }
    }


    /**
     * Render 
     */
    const todoListItems = todoList.map((todo, index) => <TodoItem key={index} todo={todo} />);


    return (
        <>
            <div className="todo__list">
                {todoListItems}
            </div>

            <div className="todo__add">
                <input type="text" id="todo-add" placeholder="New todo..." value={newTodo} 
                    onChange={e => setNewTodo(e.target.value)} 
                    onKeyDown={e => handleKeyDownEvent(e)} 
                />
                <button onClick={add}>Add</button>
            </div>
        </>
    )
}
