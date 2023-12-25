import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'

function InputBar() {

    const [todo, setTodo]=useState("");

    const{addTodo}=useContext(TodoContext);

    function submitHandeler(){
        addTodo(todo);
        setTodo("");
    }
  return (
    <div className='max-w-[600px] w-full flex justify-center py-3 '>
        <input 
            className='w-11/12 p-3 px-4 bg-[#161A30] text-white rounded-l-xl'
            type="text"
            placeholder="add todo"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='p-3 px-4 rounded-r-xl bg-green-500 font-bold text-yellow-50'
        onClick={submitHandeler}>Add</button>
    </div>
  )
}

export default InputBar