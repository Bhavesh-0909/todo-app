import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';
import { MdCancel, MdCleaningServices } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

function TodoItems({todo}) {

    const {deleteTodo, setEditable, editable, updateTodo} = useContext(TodoContext);

    const [todomsg, setTodomsg]=useState(todo.todoString)
    

    function deleteHandeler(id){
        deleteTodo(id);
    }
    
    function editTodo(){
        updateTodo(todo.id, {...todo, todoString: todomsg})
            setEditable(true)
    }

  return (
        <div>
            <input
                type="text"
                value={todomsg}
                readOnly={!editable}
                onChange={(e)=>setTodomsg(e.target.value)}
            />
            <button disabled={todo.checked}
            onClick={()=>{
                    if(todo.checked) return;
                    if(!editable){
                        editTodo()
                    }
                    else{
                        setEditable((prev)=>!prev)
                    }
                }}>
                {editable?<IoIosSave/>:<MdEdit/>}
            </button>
            <button onClick={()=> deleteHandeler(todo.id)}>
                <MdCancel/>
            </button>
        </div>    
  )
}

export default TodoItems