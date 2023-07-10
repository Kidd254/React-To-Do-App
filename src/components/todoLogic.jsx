import { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import Header from "./Header";

const TodoLogic = ()=> { 
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  return(
    <div>
        <Header />
        <InputTodo />
        <TodoList todosProps ={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoLogic;
