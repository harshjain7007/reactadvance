import React, { useRef, useEffect } from 'react'

const UseRefFocus = () => {
     const inputRef = useRef()

     useEffect(() => {
          inputRef.current.style.backgroundColor = "red"
     })

     const focusInput = () => {
          console.log(inputRef);
          inputRef.current.focus()
     }
  return (
    <div>
     <input type="text" ref={inputRef}/>
     <button onClick={focusInput}>click</button>
    </div>
  )
}

export default UseRefFocus