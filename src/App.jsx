import './App.css'
import TodoList from './components/TodoList/TodoList'

export default function App() {
    const initialTodoList = [
        { id: 1, title: 'First Todo', completed: true },
        { id: 2, title: 'Second Todo', completed: false },
        { id: 3, title: 'Third Todo', completed: false },
    ];

    return (
        <>
            <div className="todo__app">
                <h1>To do</h1>
                <TodoList initialTodoList={initialTodoList} />
            </div>
        </>
    )
}
