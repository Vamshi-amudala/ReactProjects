import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import Assessment from './Assessment';
import TodoList from './TodoList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoList/>
    {/* <Assessment /> */}
  </React.StrictMode>
);

