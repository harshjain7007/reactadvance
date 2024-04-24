import React, { useRef, useState } from 'react'
import { throttle } from 'lodash'

const Throttling = () => {
     const [ incPressed, setIncPressed ]  = useState(0)
     const [ incCount , setIncCount ]  = useState(0)

     const myThrottle = (callBack, fixedTimeDelay) => {
          let last = 0;
          return (...args) => {
               let now = new Date().getTime();
               if(now - last < fixedTimeDelay) return;
               last = now
               return callBack(...args)
          }
     }

     const forThrottleChck =  useRef(myThrottle(() => {  // we have built in throttle 
          setIncCount(prevState => prevState + 1) // they fun invoked after 800 miliseconds
     }, 800))


     // const forThrottleChck =  useRef(throttle(() => {  // we have built in throttle 
     //      setIncCount(prevState => prevState + 1) // they fun invoked after 800 miliseconds
     // }, 800))

     const handleClk = () => {
          setIncPressed(prevState => prevState + 1)
          forThrottleChck.current()
     }


  return (
    <>
     <button onClick={handleClk}>Increment</button>
     <h1>Button Preesed : {incPressed} Times</h1>
     <h1>Triggered : {incCount} Times</h1>
    </>
  )
}

export default Throttling