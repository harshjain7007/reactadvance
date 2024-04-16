import React, { useEffect } from 'react'
import { Fetch_All_Post } from '../../Redux/slice/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { resetPost } from '../../Redux/slice/postSlice'
const ReApiCall = () => {
  // https://jsonplaceholder.typicode.com/posts
 const data = useSelector(state => state.allPost.fetchPost)
 const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Fetch_All_Post())
  },[])

  // console.log("data==>", data);
  return (
    <>
    <button onClick={() => dispatch(resetPost())}>Clear state</button>

      {data ? data?.map((curElem, index) => {
        return <h6 key={index}>{curElem.title}</h6>
      }): <h1> Not Data Found </h1>}
    </>
  )
}

export default ReApiCall