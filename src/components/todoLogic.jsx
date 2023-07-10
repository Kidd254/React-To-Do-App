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
const handleChange = (id)=>{
       setTodos((prevState)=>
        prevState.map((todo)=>{
           if(todo.id===id){
            return{
                ...todo,
                completed: !todo.completed,
                
            }
            
           }
           return todo;
        })
       )
    }
   
  return(
    <div>
        <Header />
        <InputTodo />
        <TodoList todosProps ={todos} handleChange={handleChange}/>
    </div>
  )
   
}

export default TodoLogic;
