import React from "react";
// Potentially need to add line through style

function DoTo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li>{todo.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default DoTo;
