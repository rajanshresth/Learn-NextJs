import React from 'react'
import { useState } from 'react'

type Todo = [{ title: string, done: boolean, id: number }]
interface AddTodosProps {
    onAddTodos: (title: string) => void;
    todos: Todo;
    }

export default function AddTodos({onAddTodos,todos}:AddTodosProps) {
    const [title,setTitle]=useState('')
  return (
    <div>
        <input type="text"
                placeholder='Add Todo'
                value={title}
                onChange={e=>setTitle(e.target.value)} />

        <button
            onClick={()=>{
                setTitle('');
                onAddTodos(title)
            }
        }
        >
            Add
        </button>      

        <div>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo.title}</li>
                    
                ))}
            </ul>
        </div>  
    </div>
  )
}
