import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RequestTracker from '../Learn-React/Queue'
import Queue from '../Learn-React/Queue'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">
          Rajan
        </h1>
        {/* <TrafficLight /> */}
        {/* <Queue /> */}
        <RequestTracker />
      </main>
        
    </div>
  )
}

export default Home
