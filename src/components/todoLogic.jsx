import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import Header from './Header';

const TodoLogic = () => {
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
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,

        };
      }
      return todo;
    }));
  };
  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    const newtask = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newtask]);
  };
  return (
    <div>
      <Header />
      <InputTodo addTodo={addTodo} />
      <TodoList todosProps={todos} handleChange={handleChange} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoLogic;
