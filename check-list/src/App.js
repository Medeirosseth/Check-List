import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import CheckList from './components/CheckList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        Check List
      </header>
      <Form
      setInputText={setInputText}
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
       />
      <CheckList />
    </div>
  );
}

export default App;
