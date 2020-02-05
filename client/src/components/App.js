import React from 'react';
import '../assets/App.css';
import TodoContainer from './todo/todo_container'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
  	<BrowserRouter>

    <div className="App">
      <header className="App-header">
        <h1>Todo List practice</h1>
      </header>

      <TodoContainer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
