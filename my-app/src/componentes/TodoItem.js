import React from 'react';


const TodoItem = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};


export default TodoItem;