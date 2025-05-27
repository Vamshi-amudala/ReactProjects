import React from 'react';
import './todoStyle.css';

export const Task = (props) => {
  return (
    <div className="task-card"
    style={ { backgroundColor: props.completed ? 'lightgreen' : 'white' }}>
      <span className="task-text">{props.taskName}</span>
      <button className="complete-button" onClick={() => props.completeTask(props.id)}>Completed</button>
      <button className="delete-button" onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
  );
};
