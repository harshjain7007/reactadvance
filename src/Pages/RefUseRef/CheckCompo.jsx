import React from 'react'
import { Link } from 'react-router-dom'


const CheckCompo = () => {
  return (
    <div>CheckCompo
      <Link to={"/"}> go to ref  </Link>
      <br />
      <br />
      <br />
      <Link to={"/focus"}> go to focus second use case of ref  </Link>

    </div>
  )
}

export default CheckCompo