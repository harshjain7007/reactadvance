import React, { useState } from 'react'
import PostList from './Compo/PostList'
// import { useQuery } from '@tanstack/react-query'
// import { fetchPosts } from '../../api/api'


const FirstFetchApi = () => {
     // // useQueries is hook rrovided by react-query
     // const { data, isLoading, isError, error, status } = useQuery({
     //      queryKey:["posts"], //  provide each and every query || unique query  
     //      queryFn: fetchPosts // here we will make are asynchronus request we will fetch are API
     // })
     // console.log(data, isLoading);


     const [toggle, setToggle] = useState(true)

  return (
    <div>
    <button onClick={() => setToggle(!toggle)}>Toggle For Show Posts</button>
     {toggle && <PostList />}
    </div>
  )
}

export default FirstFetchApi