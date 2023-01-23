import React from 'react'
import { useState } from 'react'

interface ChangeTodoProps {
    onChangeTodo: (nextTodo: string) => void;
    todos: string[];
    }


export default function ChangeTodo({onChangeTodo,todos}:ChangeTodoProps) {
  return (
    <div>
        <ul>
            {todos.map((todo,index)=>(
                <div>
                    <li key={index}>{todo}</li>
                    <button onClick={() => onChangeTodo(todo)}>
                        Change
                    </button>
                    </div>
            ))}
        </ul>
    </div>
  )
}
