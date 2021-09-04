import React from "react";

import TaskForm from './TaskForm';
import './NewTask.css';

const NewTask = (props) => {

    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString(),
            isComplete: false
        };
        props.onAddTask(taskData);
    };

    return (
        <div className='task'>
            <TaskForm onSaveTaskData={saveTaskDataHandler} />
        </div>
    );
};

export default NewTask;