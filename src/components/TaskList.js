import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, removeTask }) {
  if (tasks.length === 0) return <p>Nenhuma tarefa encontrada.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}