import React, { useEffect, useLayoutEffect, useState } from 'react'
const userIds = [1,2] 

const UseLayoutHook = () => {
  const [ userId, setUserId ] = useState(userIds[0])
  const [ isAdmin, setIsAdmin ] = useState(true)


  //  which code is for 200 milisecond slow rendering ... 
  let now = performance.now();
  while( performance.now() - now < 200){
    // Do somthing ...
  }

 // if we can use useEffect then which render 1st state update value and after 200 milisecond print the second updated  state value  
  // useEffect(() => {   
  //   setIsAdmin(userId === userIds[0])
  // }, [userId])

  // with using of useLayoutEffect they print the both states after 400 miliseconds, bcz  it fires synchronously after all DOM mutations. 
  useLayoutEffect(() => {  
    setIsAdmin(userId === userIds[0]) // which is synchoronous so its block tha rendering of component
  }, [userId])
  // useLayoutEffect not good for performance so use it in special cases

  const handleChng  = () => {
    const otherId = userIds.find((id) => id !== userId)
    setUserId(otherId)
  }

  console.log("Check rendering");
  return (
    <div>
      <h1> User Id : {userId} </h1>
      <h1> Admin : {isAdmin ? "true" : "false"} </h1>
      <button onClick={handleChng}>Chng</button>
      <p>Two time rerenders bcz two state updated </p>
    </div>
  )
}

export default UseLayoutHook