import React from "react"
import Todo from "./Todo"

const CheckList = ({ todos, setTodos }) => {
  
  return (
    <div className="checklist-container">
      <ul className="checklist-list">
        {todos.map((todo) => (
          <Todo 
          todos={todos}
          setTodos={setTodos}
          key={todo.id} 
          text={todo.text} 
          todo={todo}
          />
        ))}
      </ul>
    </div>
  )

}


export default CheckList;