
import React, { useMemo, useState } from 'react'

const UseMemo = (props) => {
  const [ counterOne, setCounterOne ] = useState(0)
  const [ counterTwo, setCounterTwo ] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  // const isEven = () => {
  //   console.warn("....");
  //   let i = 0;
  //   while(i < 2000000000) i++; // with out usememo counter two v slow work karega 
  //   return counterOne % 2 === 0
  // }

  const isEven = useMemo(() => {
    console.warn("....");
    let i = 0;
    while(i < 2000000000) i++; 
    return counterOne % 2 === 0
  }, [counterOne])


  return (
    <div>
    <h1>One : { isEven ? "Even":"Odd" }</h1>
      <button onClick={incrementOne}> counterOne : {counterOne}</button>
      <button onClick={incrementTwo}> counterTwo : {counterTwo}</button>
    </div>
  )
}

export default UseMemo



// import React, { useState, useMemo } from 'react'


// const UseMemo = () => {
// const [ myNum, setMyNum ] = useState(0)
// const [ show, setShow ] = useState(false)

// const getValue = () => {
//   return setMyNum(myNum + 1)
// }

// const countNumber = (num) => {
//   console.log("countNumber num :", num);
//   for(let i = 0; i < 10000000000 ; i++ )
//   return num
// }

// const checkData = countNumber(myNum)
//   return (
//     <>
//       <button onClick={getValue}>counter</button>
//       <div>my new number : {checkData}</div>
//       <button onClick={() => setShow(!show)}>{
//       show ? "you cliked me" : "you don't clicked me " }</button>
//     </>
//   )
// }

// export default UseMemo