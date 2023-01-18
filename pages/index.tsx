import type { NextPage } from 'next'
import Head from 'next/head'
import TodosList from '../Todos/TodosList'

const Home: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">
          Todos
        </h1>
        <TodosList />
        
      </main>
        
    </div>
  )
}

export default Home
