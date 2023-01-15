/* import React from 'react'

export default function Snapshot() {
    const [isSent,setIsSent]=React.useState(false)
    const [message, setMessage]=React.useState('Hi!');

    //for count
    const [number, setNumber]=React.useState(0);


    if (isSent) {
        return (
            <div>
                <h1>Message Sent</h1>
            </div>)
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
                setIsSent(true);
                sendMessage(message);
        }}>
        <textarea 
            placeholder='Message'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
        </form>

        Count
        <h1>{number}</h1>
        <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
                }}
                >
                    +3
        </button>

    </div>
  )
}

function sendMessage(message:string){
    console.log(message);
} */

/**
 * What happens when you click the button?
 * 1. The onSubmit event handlers executes
 * 2. setIsSent(true) sets isSent to true and queues a re-render
 * 3. React re-render the component according to the new isSent value.
 */

/**
 * Setting state only changes it for the next render.
 * During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after setNumber(number + 1) was called:
 * Here is what this button’s click handler tells React to do:
 
    * 1. setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.
    * 2. setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.
    * 3. setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.

    * Correct way to do it is:
    * <button onClick={() => {
        setNumber(number + 3);
        alert(number);
      }}>+5</button>
 */

// Implement a traffic light

import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }
 /*  if(walk===true){
    alert('Walk');
    }else{
        alert('Stop');
    } */

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

