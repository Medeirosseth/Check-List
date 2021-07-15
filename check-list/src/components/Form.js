import React from "react";

const Form = () => {
  return(
    <form>
      <input type="text" className="checklist-input" />
      <button className="checklist-button" type="submit">
        <i class="fas fa-plus-square"></i>
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