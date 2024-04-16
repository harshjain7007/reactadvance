import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FirstFetchApi from './FirstFetchApi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  // defaultOptions:{
  //   queries:{
  //     staleTime: 1000 * 60
  //   }
  // }
}) // creating a new instance of react-query & tanstack query
const Query = () => {

  return (
    <>

    <QueryClientProvider client={queryClient}>
    <FirstFetchApi />
    {/* ReactQueryDevtools  provided a extra dev tool with some functionality show on server right bottom */}
    <ReactQueryDevtools initialIsOpen={false}/> 
    </QueryClientProvider>
    </>
  )
}

export default Query


// http://localhost:3000/posts
// http://localhost:3000/tags