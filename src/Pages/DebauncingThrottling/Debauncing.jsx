import React, { useRef, useState } from 'react'
import { debounce } from 'lodash'

const Debauncing = () => {
     const [ incPressed, setIncPressed ]  = useState(0)
     const [ incCount , setIncCount ]  = useState(0)

     const custumDebounce = (callBack, delayTime) => {
          let timer;

          return function (...args){  // this ...args is for take extra arguments, if you pass some arguments in debounceCount(argu)
               if(timer) clearTimeout(timer)
               timer = setTimeout(() => {
                    callBack.apply(this, args); 
               }, delayTime);
          }
     }

     const debounceCount = useRef(custumDebounce(() => { // we have lodash npm for built in solution
          setIncCount(prevState => prevState + 1)
     }, 800))


     // const debounceCount = useRef(debounce(() => { // we have lodash npm for built in solution
     //      setIncCount(incCount + 1)
     // }, 2000))

     const handleClk = () => {
          setIncPressed(prevState => prevState + 1)
          debounceCount.current()
     }

  return (
    <>
     <button onClick={handleClk}>Increment</button>
     <h1>Button Preesed : {incPressed} Times</h1>
     <h1>Triggered : {incCount} Times</h1>
    </>
  )
}

export default Debauncing