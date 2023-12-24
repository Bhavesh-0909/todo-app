import { useContext } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';
import TodoContext from './context/TodoContext';

function App() {
  const {todos}=useContext(TodoContext)
  return (
    <div className="App">
      <InputBar/>
      {todos.map((todo)=> <TodoItems key={todo.id} todo={todo}/>)}
      
    </div>
  );
}

export default App;
