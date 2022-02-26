import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoProvider } from "./TodoContext";
import { AppUI } from './App/AppUI.js';

ReactDOM.render(
  <TodoProvider>
    <AppUI />
  </TodoProvider>,
  document.getElementById('root')
);
