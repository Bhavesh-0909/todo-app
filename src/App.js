import { useContext, useEffect } from 'react';
import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';
import TodoContext from './context/TodoContext';

function App() {
  const {todos, setTodos}=useContext(TodoContext);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("todos"))

    if ( storage && storage.length > 0) {
      setTodos(storage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <div className="w-screen px-10 min-h-screen bg-[#F3F8FF] flex flex-col items-center">
      
      <InputBar/>

      <div className='flex flex-col gap-y-3 max-w-[500px] w-full'>

        {todos.map((todo)=> <TodoItems key={todo.id} todo={todo}/>)}

      </div>
      
    </div>
  );
}

export default App;
