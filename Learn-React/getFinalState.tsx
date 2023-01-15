
  export function getFinalState(baseState:Number, queue:Number[]) {
   /*  let finalState = baseState;

    for (let update of queue) {
      if (typeof update === 'function') {
        // TODO: apply the updater function
      } else {
        // TODO: replace the state
      }
    }
  
    return finalState; */
    let finalState = baseState;

    for (let update of queue) {
      if (typeof update === 'function') {
        // Apply the updater function.
        finalState = update(finalState);
      } else {
        // Replace the next state.
        finalState = update;
      }
    }
  
    return finalState;
  }
  
