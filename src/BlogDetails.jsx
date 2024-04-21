import React from 'react'
import { useLocation } from 'react-router-dom'
import Blogs from './Blogs';

const BlogDetails = () => {
  let blogLocation = useLocation();
  let currentId = blogLocation.pathname.split('/')[2];
  let currentData = Blogs.filter((v,i)=> v.id == currentId) 
// console.log(currentData)
  return (
    <div>
      <h1>Blog details page</h1>
      <h2>{currentData[0].title}</h2>
      <p>{currentData[0].body}</p>
    </div>
  )
}

export default BlogDetails