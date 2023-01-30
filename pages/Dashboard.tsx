import React from 'react'
import { useState } from 'react'
import TodosList from '../TODO/TodosList'
import AddTodos from '../TODO/AddTodos'
import { useAuthState } from 'react-firebase-hooks/auth'
import router from 'next/router'
import { getAuth } from '@firebase/auth'
import { initFirebase } from '../firebase/firebase'

type Todo = {
  id: number,
  title: string,
  done: boolean
}

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function Dashboard() {
  const [todos,setTodos]=useState(initialTodos)
  initFirebase()
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if(loading){
    return <div>loading...</div>
  }
  if(!user){
    router.push('/login')
    return <div>Not logged in</div>
  }

  const handleAddTodo=(title:string)=>{
    setTodos([...todos, {
      id: nextId++,
      title: title,
      done: false
    }])
  }
  
  
  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  

const handleChangeTodo = (nextTodo:Todo) => {
  setTodos(todos.map(t => {
    if (t.id === nextTodo.id) {
      return nextTodo;
    } else {
      return t;
    }
  }));

};
  return (
    <div>
      <h1 className="text-3xl bold">
          Todos
        </h1>
        <button onClick={()=>auth.signOut()}>
          <span>Logout</span>
        </button>
        <AddTodos
          onAddTodos={handleAddTodo}
          />
        <TodosList 
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onRemoveTodo={handleRemoveTodo}
        />
        
    </div>
  )
}
