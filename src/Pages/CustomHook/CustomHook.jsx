import React from 'react'
import useCounter from './useCounter'
const CustomHook = () => {
     const [ count, Increment, Decerement ]  = useCounter(20)

  return (
    <>
     <h1>{count}</h1>
     <button onClick={() => Increment(20)}>INC</button>
     <button onClick={Decerement}>DEC</button>
    </>
  )
}

export default CustomHook