import React from 'react'
import Post from './Post'

const ListadoPosts = ({posts, setPost, eliminarPost}) => {

  return(
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {posts&& posts.length ? (
      <>
      
          <h2 className=" font-black text-3xl text-center mt-5 mb-10">
              Manage your posts {''}
            <span className="text-indigo-600 font-bold text-3xl">Posts</span>
          </h2>
        {posts.map(post =>(
          <Post
            key={post.id}
            post={post}
            setPost={setPost}
            eliminarPost={eliminarPost}
          />   
        ))}

      </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center">There are no post</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start by posting an article{''}
            <span className="text-indigo-600 font-bold "> and will appear here </span>
          </p>
        </>

      )}
          
    </div>
  
)}

export default ListadoPosts
