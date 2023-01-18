import { useState } from 'react';
// import {useImmer} from 'use-immer';

let nextId = 0;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
  ];

export default function AddTodos() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <input
        placeholder="Add todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setTodos([
          ...todos,
          { id: nextId++, title: name, done: false }
        ]);
      }}>Add</button>
      
        {todos.map(todos => (
          <ul>
            <li key={todos.id}>{todos.title}</li>
          </ul>
        ))}

    </>
  );
}
