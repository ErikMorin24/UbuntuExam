import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </div>
  );
};

export default TodoItem;
