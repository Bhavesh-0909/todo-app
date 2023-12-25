import { useContext } from 'react';
import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';
import TodoContext from './context/TodoContext';

function App() {
  const {todos}=useContext(TodoContext)
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
