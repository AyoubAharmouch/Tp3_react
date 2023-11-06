import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  const markCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = <s>{tasks[index]}</s>;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        className='inp'
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='pri' onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li className='lii' key={index}>
            {task}
            <button className='delete' onClick={() => deleteTask(index)}>Delete</button>
            <button className='edit' onClick={() => editTask(index, prompt('Enter new task'))}>
              Edit
            </button>
            <button className='done' onClick={() => markCompleted(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
