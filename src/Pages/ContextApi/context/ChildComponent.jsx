import React, { useContext } from 'react'
import { counterContext } from './context'
import { ThemeContext } from './ThemeProvider'

const ChildComponent = () => {
     const value =  useContext(counterContext)
    //  console.log(value);

     const { toggle, toggleTheme } = useContext(ThemeContext)

    //  console.log(toggle);

  return (
    <div>
     <h1>counter : {value.count}</h1>
     <button onClick={() => value.setCount(value.count + 1)}>Increment</button>

     <br />
     <br />
     <br />

    <h2>Toggle : {toggle ? " TRUE" : "FALSE"}</h2>
    <button onClick={toggleTheme}>chng Toggle</button>
    </div>
  )
}

export default ChildComponent