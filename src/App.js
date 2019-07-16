import React from 'react';
import DragDrop from './DragDrop';
import './App.css';

const tasks = [
  { name: 'Task 1', category: 'todo' },
  { name: 'Task 2', category: 'doing' },
  { name: 'Task 3', category: 'done' },
  { name: 'Task 4', category: 'accepted' }
];

export default function App() {
  return <DragDrop tasks={tasks} />;
}
