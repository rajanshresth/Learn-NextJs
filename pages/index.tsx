import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import login from './login';


export default function Home(){
  
  
  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Dashboard />
      </div>

    </div>
  )
}
