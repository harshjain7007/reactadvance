import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ReState = () => {
     const numValue = useSelector(state => state.currentNum)
     const dispatch = useDispatch()
     
  return (
    <div>
     <h1> {numValue.Num} </h1>
     <button onClick={() => dispatch({ type: 'add', payload: 10 })}>10 ADD</button>
     <button onClick={() => dispatch({ type: 'sub', payload: 5 })}>5 SUB</button>
     <button onClick={() => dispatch({ type: 'mul', payload: 2 })}>2 MUL</button>
     <button onClick={() => dispatch({ type: 'div', payload: 2 })}>2 DIV</button>
     <button onClick={() => dispatch({ type: 'clear', payload: null })}>Clear</button>
    </div>
  )
}

export default ReState