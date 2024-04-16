import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import UseRefValuePersist from './UseRefValuePersist'
import CheckCompo from './CheckCompo'
import UseRefFocus from './UseRefFocus'

const RouteCompo = () => {
  return (
    <>
    {/* <UseRefValuePersist /> */}
    <br /> <p>use Ref Focus</p>
    <UseRefFocus />
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseRefValuePersist />} />
        <Route path="/check" element={<CheckCompo />} />
        <Route path="/focus" element={<UseRefFocus />} />
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default RouteCompo