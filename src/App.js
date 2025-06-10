import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Carregar do localStorage ao iniciar
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all'); // all, completed, pending

  useEffect(() => {
    // Salvar no localStorage sempre que tasks mudar
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar nova tarefa
  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Marcar tarefa como concluída ou não
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Remover tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtrar tarefas
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
  });

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Lista de Tarefas</h1>

      <TaskForm addTask={addTask} />

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;