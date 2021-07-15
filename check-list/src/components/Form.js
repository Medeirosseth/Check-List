import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  /// here are javascript code and functions 
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, 
      completed: false, 
      id: Math.random() * 100 }
    ])
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="checklist-input" />
      <button onClick={submitToDoHandler} className="checklist-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div>
        <select onChange={statusHandler} name="occasion" className="filter-occasion">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;