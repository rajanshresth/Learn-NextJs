import React from 'react'
import { useState } from 'react'

// export default function Queue() {
//     const [num,setNum]= useState(0)

//   return (
//     <>
//         <h1>{num}</h1>
//         <button onClick={()=>{
//             setNum(num=>num+1)
//             setNum(num=>num+1)
//             setNum(num=>num+1)
//         }}>+3</button>
//     </>
//   )
// }

/** 
 *      Queued Updated      n     returns
 *     1                   0     0+1=1
 *     2                   1     1+1=2
 *     3                   2     2+1=3
 */


//Request Counter
/* export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);
    console.log(completed)
  
    async function handleClick() {
      setPending(pending=> pending + 1);
      await delay(3000);
      setPending(pending=>pending - 1);
      setCompleted(completed=>completed + 1);
    }
  
    return (
      <>
        <h3>
          Pending: {pending}
        </h3>
        <h3>
          Completed: {completed}
        </h3>
        <button onClick={handleClick}>
          Buy     
        </button>
      </>
    );
  }
  
  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  } */


import { getFinalState } from './getFinalState';

function increment(n: number) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}

  