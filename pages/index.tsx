import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import TodosList from '../TODO/TodosList'
import AddTodos from '../TODO/AddTodos'

type Todo = {
  id: number,
  title: string,
  done: boolean
}

let nextId = 2;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

const Home: NextPage = () => {
  const [todos,setTodos]=useState(initialTodos)

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
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl bold">
          Todos
        </h1>
        <AddTodos
          onAddTodos={handleAddTodo}
          />
        <TodosList 
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onRemoveTodo={handleRemoveTodo}
        /> 
      </main>
    </div>
  )
}

export default Home
