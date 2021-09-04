import React from "react";
import TaskItem from './Task/TaskItem';

const Tasks = (props) => {
    return (
        <div>
            {props.items.map((props) => (
                <TaskItem
                    key={props.id}
                    title={props.title}
                    isComplete={props.isComplete}
                />
            ))}
        </div>
    );
};

export default Tasks;