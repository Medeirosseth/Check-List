import React from "react";

const Form = ({ setInputText }) => {
  /// here are javascript code and functions 
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return(
    <form>
      <input onChange={inputTextHandler} type="text" className="checklist-input" />
      <button className="checklist-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div>
        <select name="occasion" className="filter-occasion">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;