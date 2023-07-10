import TodoItem from "./TodoItem";

function TodoList({todosProps, handleChange, deleteTodo}){
    return (
        <div>
            <ul>
                {todosProps.map((todo)=>(
                    <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} deleteTodo={deleteTodo}/>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;
