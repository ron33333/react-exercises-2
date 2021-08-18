import React from 'react';

function Task({value, removeTask, id}) {
    return (
        <li className="task">{value}<span className="delete" onClick={() => removeTask(id)}><button>delete</button></span></li>
    );
}

export default Task;
