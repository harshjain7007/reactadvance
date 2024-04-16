import React from 'react'
import "./app.scss"

const Scss = () => {
     return (
          <>
               <h1>use variable with sass </h1>
               <div className='divContainer'>Scss</div>
               <br />
               <br />

               <h1>use mixing and include </h1>
               <button className='btn'> click </button>
               <br />
               <br />

               <h1>use nested div </h1>
               <div className='parent'>
                    parent
                    <div className='child'>
                         child
                    </div>
               </div>
          </>
     )
}

export default Scss