import React from 'react';
import "./App.css"
import AddTask from './Components/AddTodo';
import TodoList from './Components/TodoList';

const App = () => {
  
  return (
    <div className="App">
      <AddTask/>
      <TodoList/>
    </div>
  );
}

export default App;