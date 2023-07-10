import TodoItem from "./TodoItem";

function TodoList({todosProps, setTodos}){
    return (
        <div>
            <ul>
                {todosProps.map((todos)=>(
                    <TodoItem key={todos.id} ItemProp={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )

}
export default TodoList;
