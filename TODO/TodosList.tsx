import React from 'react'
import { useState } from 'react'
import Task from './Task'

interface TodosListProps {
    todos: { title: string, done: boolean, id: number }[];
    onChangeTodo: (nextTodo: { title: string, done: boolean, id: number }) => void;
    onRemoveTodo: (index: number) => void;
}

export default function TodosList({todos,
      onChangeTodo,
      onRemoveTodo,}:TodosListProps) {
  
  return (
    <div>

        <ul>
            {todos.map((todo: { title: string; done: boolean; id: number; }) =>(
              <li key={todo.id}>
                <Task todo={todo}
                      onChange={onChangeTodo}
                      onRemove={onRemoveTodo} />
              </li>
            ))}
        </ul>

    </div>
  )
}
