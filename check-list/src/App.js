import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import CheckList from './components/CheckList';

function App() {
  ///state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  /// use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  /// functions 
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
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
      setStatus={setStatus}
       />
      <CheckList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
