import React from 'react'
import Interceptor from './Interceptor'
import axios from 'axios'

axios.interceptors.request.use((req) => {
     // if you want to modified request before sending to server then write code here  
     req.headers.name = "harsh" // like this
     console.log("req == > ", req); // whole request object
     return req // you need to return request if you dont do it then which axio not send req to server
})

axios.interceptors.response.use((res) => {
     // if you want to modified response then write code here 
     console.log("res ==>", res); // whole response object
     return res // you need to return response if you dont do it then which axio not forward response to component
})

const Inter = () => {
  return (
    <>
     <Interceptor />
    </>
  )
}

export default Inter