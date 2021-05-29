import { useState } from "react";
import Todo from "./Todo";
import FormTodo from "./FormTodo";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  }


  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <Card>
          {todos.map((todo, index) => (
            <Card.Body>
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default App;
