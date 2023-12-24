import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'

function InputBar() {

    const [todo, setTodo]=useState("");

    const{addTodo}=useContext(TodoContext);

    function submitHandeler(){
        addTodo(todo);
    }
  return (
    <div>
        <input 
            type="text"
            placeholder="add todo"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={submitHandeler}>Add</button>
    </div>
  )
}

export default InputBar