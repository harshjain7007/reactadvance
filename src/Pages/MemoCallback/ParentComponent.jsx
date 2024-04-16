import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
     const [ counterOne, setCounterOne ] = useState(0)
     const [ counterTwo, setCounterTwo ] = useState(0)

     const IncrementCount = () => {
          setCounterOne(prevState => prevState  + 1)
     }

     const IncementCounTwo = () => {
          setCounterTwo(prevState => prevState  + 1)
     } 

     const fun = useCallback(() => {
          console.log("fun inside");
     }, [counterTwo]) // without useCallback which, if we can change counterOne than which is also rerender its Child component 

  return (
     <>
     <ChildComponent counterTwo={counterTwo} fun={fun} />
    <div>ParentComponent Counter {counterOne}</div>
    <button onClick={IncrementCount}>Increment</button>
    <button onClick={IncementCounTwo}> Count Two For Child ReRendering </button>
     </>
  )
}

export default ParentComponent