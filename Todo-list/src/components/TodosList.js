import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "completed" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                        <span>
                            <button
                                className="button-edit task-button"
                                onClick={() => handleEdit(todo)}
                            >
                                <i className="fa fa-edit"></i>
                                EDIT
                            </button>
                        </span>
                        <span>
                            <button
                                className="button-delete task-button"
                                onClick={() => handleDelete(todo)}
                            >
                                <i className="fa fa-trash"></i>
                                DELETE
                            </button>
                        </span>
                </li>
            ))}
        </div>
    );
};

export default TodosList;
