import React, {  useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UseRefValuePersist = () => {
     const [state, setState] = useState(0)
     const counterRef = useRef(0)
     
     useEffect(()=> {
          counterRef.current += 1
          console.log("reRendering");          
     })
     
     const handleClick = () => {
          setState(state + 1)
     }

  return (
     <>
    <h1>Counter Ref :- {counterRef.current}</h1>
    <h1>state Value :- {state}</h1>
    <button onClick={handleClick}> onclick </button>
    <Link to={"/check"} > go to Home </Link>
    <br />
    <br />
    <p>If we change the ref then component not re render & which not update variable dynamicallyy</p>
    <button onClick={() => counterRef.current += 1}>chng ref only</button>
     </>
  )
}

export default UseRefValuePersist