let uniqId = 0;

function TodoApp() {
    const [inputValue, setInputValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: ++uniqId, text: inputValue, completed: false },
            ]);
            setInputValue("");
        }
    };

    function handleDestroyTodo(todoId) {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    }

    function handleChecked(todoId) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed };
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function handleCountCompleteTask() {
        let completeTasks = 0;
        todos.forEach((todo) => todo.completed && completeTasks++);

        return completeTasks;
    }

    return (
        <div className="wrapper">
            <h1 className="title">Todo App</h1>
            <form onSubmit={handleSubmit} className="add-todo">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                    className="todo-input"
                />
                <button type="submit" className="add-btn">
                    Thêm
                </button>
            </form>
            <ul className="todos">
                {todos.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        <input
                            type="checkbox"
                            className="input-checkbox"
                            checked={todo.completed}
                            onChange={() => handleChecked(todo.id)}
                        />
                        <span
                            className="todo-content"
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            className="destroy-todo-btn"
                            onClick={() => handleDestroyTodo(todo.id)}
                        >
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="todo-footer">
                <p className="todo-footer-text">Tổng: {todos.length} task(s)</p>
                <p className="todo-footer-text">
                    Hoàn thành: {handleCountCompleteTask()} task(s)
                </p>
                <p className="todo-footer-text">
                    Còn lại: {todos.length - handleCountCompleteTask()} task(s)
                </p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TodoApp />);
