import React from 'react'

export default function Todos() {
    const [updateTodos, setUpdateTodos] = React.useState();
    
    const addTodos = (todos: string[]) => {
        setUpdateTodos([...updateTodos, todos])
    }

    }
  return (
    <div>
        <h1>Todos</h1>

    </div>
  )
}
