import React, { useReducer } from 'react'

const intialState = {
     count : 0
}

const reducer = (state, action) => {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       case 'reset':
         return intialState;
       default:
         return state;
     }
   };

const UseReducer = () => {
    const [ state, dispatch ] =  useReducer(reducer, intialState)

  return (
    <div>
     <p>if you want to update state accroding condition wise then you will try it : useReducer Hook </p>
     <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    </div>
  )
}

export default UseReducer