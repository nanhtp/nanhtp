import React, { useState } from "react";

import './TaskItem.css';

const TaskItem = (props) => {
    const [isComplete, setIsComplete] = useState(props.isComplete);

    const clickHandler = () => {
        setIsComplete(!isComplete);
    }

    return (
        <div className={isComplete ? 'is-complete' : 'not-complete'} onClick={clickHandler}>
            <label>{props.title}{isComplete ? '(Complete)' : ''}</label>
        </div>
        
    );
};

export default TaskItem;