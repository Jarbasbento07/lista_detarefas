import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}