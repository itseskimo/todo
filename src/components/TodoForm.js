import React from "react";
import '../App.css'
const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (

    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
    
  );
};

export default TodoForm;
