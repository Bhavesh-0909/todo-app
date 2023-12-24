import TodoContext from "./TodoContext";
import { useState } from "react";

export default function TodoContextProvider({children}){

    
    const [todos, setTodos] = useState([]);

    const [editable, setEditable]=useState(false);
    
    function addTodo(newtodo){
        const newtodoitem = {
            id: Date.now(),
            todoString: newtodo,
            checked: false
        }
        setTodos((prev)=> [...prev, newtodoitem])
    }

    function deleteTodo(id){
        setTodos((prev)=>(prev.filter((todo)=> todo.id !== id)));
    }

    function updateTodo(id, todo){
        setTodos((prev)=> 
            prev.map((todoitem)=> todoitem.id === id ? todo :todoitem)
        )
    }

    const value ={
        todos, setTodos,
        addTodo, deleteTodo,
        editable, setEditable,
        updateTodo
    }

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>

}
