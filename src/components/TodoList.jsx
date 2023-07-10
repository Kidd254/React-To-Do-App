import TodoItem from "./TodoItem";

function TodoList({todosProps, handleChange}){
    return (
        <div>
            <ul>
                {todosProps.map((todo)=>(
                    <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} />
                ))}
            </ul>
        </div>
    )

}

export default TodoList;
