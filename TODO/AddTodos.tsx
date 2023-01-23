import React from 'react'
import { useState } from 'react'
interface AddTodosProps {
    onAddTodos: (title: string) => void;
    }

export default function AddTodos({onAddTodos}:AddTodosProps) {
    const [title,setTitle]=useState('')
  return (
    <div className='flex justify-between'>
        <input type="text"
                className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 rounded-xl h-8 w-160 "
                placeholder='Add Todo'
                value={title}
                onChange={e=>setTitle(e.target.value)} />

        <button
            className='bg-red-500 rounded-full w-20 h-8 mx-1'
            onClick={()=>{
                setTitle('');
                onAddTodos(title)
            }}>
            Add
        </button>      
    </div>
  )
}
