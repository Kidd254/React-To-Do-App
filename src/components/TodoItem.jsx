function TodoItem({itemProp, handleChange, deleteTodo}){

 
    return(
        <li>
            <div className='content'>
            <input type='checkbox' checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
            {itemProp.title}
            <button className='btn' onClick={()=> deleteTodo(itemProp.id)}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem;
