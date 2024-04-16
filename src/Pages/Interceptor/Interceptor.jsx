import React, { useEffect, useState } from 'react'
import axios from "axios"

const Interceptor = () => {
     const [ data, setData ] = useState()
     useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => setData(res)).catch(err => console.log("ERROR", err))
     }, [])
     // console.log("Datda", data);
  return (
    <div>
    
     {data.data.title}
    </div>
  )
}

export default Interceptor