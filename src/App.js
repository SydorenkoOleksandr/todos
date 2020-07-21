import React from 'react';
import TodoList from './todo/TodoList'


function App() {

  const todosArr=[
    {id:1, completed:false, title:"buy bread"},
    {id:2, completed:false, title:"buy milk"},
    {id:3, completed:false, title:"buy beer"},
    {id:4, completed:false, title:"buy car"},

  ]
  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList todos={ todosArr } />
    </div>
  );
}

export default App;
