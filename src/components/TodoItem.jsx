import { useState } from 'react';

function TodoItem({ itemProp, handleChange, deleteTodo }) {
  const [editing, setEditing] = useState(false);

  function handleEditing(){
    setEditing(true);
  }
   let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li>
      <div className="content"style={viewMode} >
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
        {itemProp.title}
        <button onClick={handleEditing}>Edit</button>
        <button className="btn" onClick={() => deleteTodo(itemProp.id)}>Delete</button>
        <input
      type="text"
      value={itemProp.title}
      className={styles.textInput} style={viewMode}
    />
      </div>
    </li>
  );
}

export default TodoItem;
