import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';
import { MdCancel, MdCleaningServices } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

function TodoItems({todo}) {

    const {deleteTodo, setEditable, editable, updateTodo, setTodos} = useContext(TodoContext);

    const [todomsg, setTodomsg]=useState(todo.todoString)
    

    function deleteHandeler(id){
        deleteTodo(id);
    }
    
    function editTodo(){
        updateTodo(todo.id, {...todo, todoString: todomsg})
            setEditable(true)
    }

    function checkboxHandeler(id, value){
        setTodos((prev)=>
            prev.map((singleTodo)=> singleTodo.id===id? {...singleTodo, checked:!value}: singleTodo)
        )
    }

  return (
        <div className={`max-w-[500px] w-full  flex items-center justify-between  px-2 p-1  bg-[#CBF1F5] text-black rounded-xl`}>
            
            <div className='flex items-center'>
                <input
                    className='bg-[#71C9CE]'
                    type="checkbox"
                    checked={todo.checked}
                    onChange={()=>checkboxHandeler(todo.id, todo.checked)}
                />

                <input
                    className={`max-w-[400px] w-8/12 px-3 py-2 bg-[#CBF1F5] rounded-l-xl outline-none ${todo.checked?"line-through opacity-50":"text-black"}`}
                    type="text"
                    value={todomsg}
                    readOnly={!editable}
                    onChange={(e)=>setTodomsg(e.target.value)}
                />
            </div>

            <div className='flex justify-end'>

                <button 
                className={`p-2 bg-white rounded-lg text-yellow-500 ${todo.checked?"opacity-50":"opacity-100"}`}
                disabled={todo.checked}
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

                <button 
                className='p-2 bg-white rounded-lg text-red-500 ml-2'
                onClick={()=> deleteHandeler(todo.id)}>
                    <MdCancel/>
                </button>

            </div>
            
        </div>    
  )
}

export default TodoItems