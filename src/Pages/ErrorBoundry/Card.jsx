import React, { useEffect, useState } from 'react'

const Card = () => {
     const [ counter, setCounter ] = useState(0)
     if(counter > 6){
         throw new Error("counter is greater than 6")
     }
  return (
    <div>
    <h1> Counter :- {counter} </h1>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default Card