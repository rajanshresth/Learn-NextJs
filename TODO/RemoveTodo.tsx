import React from 'react'

interface RemoveTodosProps {
    onRemoveTodo: (index: number) => void;
    todos: string[];
  }

export default function RemoveTodo({todos,onRemoveTodo}:RemoveTodosProps) {

  return (
    <div>
            <ul>
                {todos.map((todo,index)=>(
                    <div>
                        <li key={index}>{todo}</li>
                        <button onClick={() => onRemoveTodo(index)}>
                            Remove
                        </button>
                    </div>
                ))}
            </ul>
    </div>
  )
}
