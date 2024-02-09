import React, { useState } from 'react';
import TodoItem from './TodoItem';


let TodoList = () => {
  let [tasks, setTasks] = useState([]);
  let [inputText, setInputText] = useState('');


  let addTask = () => {
    if (inputText.trim() !== '') {
      let newTask = {
        id: Math.random().toString(36),
        text: inputText
      };
      setTasks([...tasks, newTask]);
      setInputText('');
    }
  };


  let deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div className="TodoList">
      <h1>Lista de Tareas</h1>
      <div className="contenedor">
        <input
          type="text"
          placeholder="Agregar nueva tarea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <div className="contenedor-tascas">
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};


export default TodoList;