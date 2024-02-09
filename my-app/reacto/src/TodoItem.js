import React from 'react';


let TodoItem = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};


export default TodoItem;