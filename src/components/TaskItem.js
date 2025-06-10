import React from 'react';

export default function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <li
      style={{
        background: task.completed ? '#d3ffd3' : '#ffd3d3',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h3
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            margin: 0,
          }}
        >
          {task.title}
        </h3>
        <p style={{ margin: 0 }}>{task.description}</p>
      </div>
      <div>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? 'Desmarcar' : 'Concluir'}
        </button>
        <button onClick={() => removeTask(task.id)} style={{ marginLeft: 10 }}>
          Remover
        </button>
      </div>
    </li>
  );
  
}