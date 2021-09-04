import React, { useState } from 'react';

const TaskForm = (props) => {
    const [taskInput, setTaskInput] = useState('');
    //const [isComplete, setIsComplete] = useState(false);

    const taskChangeHandler = (event) => {
        setTaskInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const taskData = {
            title: taskInput
        };
        if (taskInput.trim().length === 0) {
            alert('Yêu cầu nhập!');
        }
        props.onSaveTaskData(taskData);
        setTaskInput('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={taskInput} onChange={taskChangeHandler} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default TaskForm;