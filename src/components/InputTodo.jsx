import { useState } from 'react';

function InputTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    if (title.trim()) {
      e.preventDefault();
      addTodo(title);
      setTitle('');
    } else {
      alert('please add item');
    }
  };
  return (
    <div className="input">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input-text" type="text" value={title} id="input" placeholder="Add to do..." onChange={handleChange} />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </div>
  );
}

export default InputTodo;
