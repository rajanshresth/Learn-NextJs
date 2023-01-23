import React from 'react'
import { useState } from 'react'
interface AddTodosProps {
    onAddTodos: (title: string) => void;
    }

export default function AddTodos({onAddTodos}:AddTodosProps) {
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
            }}>
            Add
        </button>      
    </div>
  )
}
