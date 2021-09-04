import React, { useState } from 'react';

import NewTask from './NewTask/NewTask';
import Tasks from './Tasks';

import './App.css';

function App() {
  const DUMMY_TASK = [
    {
      id: 'e1',
      title: 'Task 1',
      isComplete: false
    },
    {
      id: 'e0',
      title: 'Task 2',
      isComplete: true
    }
  ];

  const [tasks, setTasks] = useState(DUMMY_TASK);

  const addTaskHandler = task => {
    setTasks((prevTask) => {
      return [task,...prevTask];
    });
  }

  return (
    <div className="App">
      <label>Todo Task</label>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
}

export default App;
