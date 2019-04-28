import React from 'react';

export default function TodoList(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.unCheck(props.task.id)}
      />
      <p style={props.task.completed ? { color: 'green' } : { color: 'red' }}>
        {props.task.name}
      </p>
    </div>
  );
}
