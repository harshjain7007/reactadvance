import React from 'react'
import { Link } from 'react-router-dom'

function ParentComponent({children}){
     return <>
          <h1>Parent Component</h1>
          <div>{children}</div> 
    <Link to={"/"}> Go to Home </Link>
     </>
}


const Ind = () => {

  return (
    <div>
    {/* <ParentComponent /> */}
    <ParentComponent>
    {/* Inner element of this ParentComponent is called children   */}
    <h6>Child Component</h6>s
    </ParentComponent>
    </div>
  )
}

export default Ind