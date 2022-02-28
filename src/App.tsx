import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {TodoModel} from "./components/models/todo-model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<TodoModel[]>([]);

    // to handle add
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(todo) {
            setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
            setTodo('');
        }
    }

    console.log(todo);
  return (
    <div className="App">
      <span className="heading">JiaTask-App</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />

       {/* {
            todos && todos.map((t) => (
                <li key={t.id}>{t.todo}.,</li>
            ))
        }*/}
    </div>
  );
}

export default App;
