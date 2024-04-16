import  { useState } from 'react'

const useCounter = (val = 1) => {
     const [ count, setCount ] = useState(val)

     const Increment = (incvalue) => {
          setCount(count + incvalue)
     }

     const Decerement = () => {
          setCount(count - 1)
     }
     
  return [ count, Increment, Decerement ]
}

export default useCounter