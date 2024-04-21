import React from 'react'
import Blogs from './Blogs'
import { Link } from 'react-router-dom'
const Blogpage = () => {

  let blogItems = Blogs.map((value, i) => {
    return (
      <div className="blog-item" key={i}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
                <button><Link to={`/blogpage/${value.id}`}>Read more</Link></button>
            </div>
    )
  })

  return (
    <div className='main-div'>
        <h1>Blogs to read</h1>
      <p className='form-link'><Link to={'form'}>Form</Link></p>    
        <div className="container">
            {blogItems}
        </div>
    </div>
  )
}

export default Blogpage