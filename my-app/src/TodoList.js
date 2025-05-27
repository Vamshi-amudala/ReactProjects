import './App.css';
import React, { useState } from 'react';
import './todoStyle.css';
import {Task} from "./Task"


function TodoList() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; 
    const task = {
        id : todolist.length === 0 ? 1: todolist[todolist.length - 1].id + 1,
        taskName : newTask,
        completed : false
    }
    setTodoList( [...todolist,task]);
    setNewTask("");

  };

  const deleteTask = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTodoList(
      todolist.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  
  return (
    <div className="App">
<h2 className="title">My Todo List</h2>

      <div className="addTask">
        <input
          type="text"
          value={newTask}
          placeholder="Enter your task"
          onChange={handleChange}
          className="task-input"
        />
        <button onClick={addTask}  className="add-button">Add Task</button>
      </div>

  
<div className="list">
        {todolist.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
        
        </div>
    </div>
  );
}

export default TodoList;

// normal code without props
// import './App.css';
// import React, { useState } from 'react';
// import styles from './todoStyle.css'

// function TodoList() {
//   const [todolist, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() === "") return; 
//     const task = {
//         id : todolist.length === 0 ? 1: todolist[todolist.length - 1].id + 1,
//         taskName : newTask,
//         completed : false
//     }
//     setTodoList( [...todolist,task]);
//     // setNewTask("");

//   };

//   const deleteTask = (id) => {
//     setTodoList(todolist.filter((task) => task.id !== id));
//   };
//   return (
//     <div className="App">
//       <div className="addTask">
//         <input
//           type="text"
//           value={newTask}
//           placeholder="Enter your task"
//           onChange={handleChange}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>

//       <div className="list">
//         {todolist.map((task) => (
//           <><h1>{task.taskName}</h1><button onClick={() => deleteTask(task.id)}>Remove task</button></>
//         ))}
       
//       </div>
//     </div>
//   );
// }

// export default TodoList;