import React, { useState } from 'react'
import { QueryClient, keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addPost, fetchPosts, fetchTags } from '../../../api/api'

const PostList = () => {
     const [ page, setPage ] = useState(1)

     // if you want rename this data then write like data:postData 
     const { data:postData, isLoading, isError, error, status } = useQuery({
          queryKey:["posts", {page}], //  provide each and every query || unique query  
          queryFn: () => fetchPosts(page), // here we will make are asynchronus request we will fetch are API
          staleTime: 1000 * 60 * 5, // previous page pe API call ni karega cache mese data de dega 
          // placeholderData: keepPreviousData,
          // gcTime: 0,
          // refetchInterval: 1000 * 5, // re fetched data every  seconnd
     })


     const { data:tagsData } = useQuery({
          queryKey:["tags"],  
          queryFn: fetchTags,
          staleTime: Infinity
     })

     const queryClient = useQueryClient()

     // useMutation for post request 
     const {mutate, isError:isPostError, isPending, error:postError, reset  } = useMutation({
          mutationFn: addPost,
          onMutate: () => { // which invoked after mutation

          },
          onSuccess: (data, variables, context ) => {
               queryClient.invalidateQueries({
                    queryKey: ['posts'], // For posts mutation
                    exact: true,
                    // predicate: (query) => {
                    //      query.queryKey[0] === "posts" && query.queryKey[1].page >= 2
                    // } 
               })
          },
          // onError: (data, variables, context) => {},
          // onSettled: (data, error, variables, context) => {}
     })

     const handleSubmit = (e) => {
          e.preventDefault();
          const formData = new FormData(e.target)
          const title = formData.get("title")
          const tags = Array.from(formData.keys()).filter((key) => formData.get(key) === "on" )

          // console.log(title, tags);

          if(!title || !tags) return

          mutate({id: postData?.data?.length + 1 , title, tags})


          e.target.reset()

     }

  return (
    <div className='container'>
    
     <form onSubmit={handleSubmit}>
     <input type="text" className="postbox" placeholder='Enter your post' name='title' />
     <div className="tags">
          {tagsData?.map((tag) => {
               return <div key={tag}>
               <input  name={tag} id={tag} type='checkbox' />
               <label htmlFor={tag}>{tag}</label>
               </div>
          })}
     </div>
     <button>post</button>
     </form>


     { isLoading && isPending && <p>Loading...</p> }
     { isError && <p>{error?.message}</p> }
     { isPostError && <p onClick={() => reset()} >Unable to post</p> }

     <div className="pages">
          <button onClick={() => setPage((oldPage) => Math.max( oldPage - 1, 0))} disabled={!postData?.prev}> Previous Page </button>
          <span>Current : {page}</span>
          <button onClick={() => setPage((oldPage) => oldPage + 1)} disabled={!postData?.next}>Next Page</button>
     </div>

     {postData?.data?.map((post) => {
          return <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.tags.map((tag, index) => <span key={index}> {tag} </span>)}</p>
          </div>
     })}
    </div>
  )
}

export default PostList