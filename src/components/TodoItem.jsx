function TodoItem({ItemProp, setTodos}){
    return(
        <li>
            <input type='checkbox'/>
            {ItemProp.title}
        </li>
    )
}

export default TodoItem;
