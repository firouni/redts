import React from 'react';
import "./App.css"
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

const App = () => {
  
  return (
    <div className={`App ?{theme}`}>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;