import React from 'react';
import {TodoModel} from "./models/todo-model";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList = ({todos, setTodos}: Props) => {
    return (
        <div className="todos">
            {
                todos && todos.map((todo) => (
                    <SingleTodo
                        todo={todo} key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))
            }
        </div>
    );
};

export default TodoList;
