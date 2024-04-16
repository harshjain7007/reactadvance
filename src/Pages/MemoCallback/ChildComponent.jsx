import React, { memo } from 'react'

const ChildComponent = ({counterTwo, fun}) => {
     console.log("child componnent re rendering");
  return (
    <div>ChildComponent</div>
  )
}

export default memo(ChildComponent)  // with the help of memo we avoid the rerendering of child component  but dont pass any prop in child component from parent other wise which is not working