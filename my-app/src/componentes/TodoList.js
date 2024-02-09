import React, { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');


  const addTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: inputText
      };
      setTasks([...tasks, newTask]);
      setInputText('');
    }
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div className="todo-list">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Agregar nueva tarea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <div className="tasks-container">
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};


export default TodoList;
