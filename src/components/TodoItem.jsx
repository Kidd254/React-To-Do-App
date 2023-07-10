function TodoItem({itemProp, handleChange, deleteTodo}){

 
    return(
        <li>
            <input type='checkbox' checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
            {itemProp.title}
            <button onClick={()=> deleteTodo(itemProp.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
