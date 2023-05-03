import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader';
import './Blog.scss';
// import { Blogs } from '../offline/blog'

const Blog = () => {
  let [blogs, setBlogs] = useState([]);
  let [loader, setLoader] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/Blogs') //? this is a promise, meaning
    //? it takes time to complete. to handle this, use then() and catch()
.then(res => { //? this is like an if statement
  // console.log(res.data);
  setTimeout(() => {
  setLoader(true);
  setBlogs(res.data)

  }, 500);
})
.catch(err => { //? this is like an else statement
  console.log(err.message);
})
  }, [])
  
  return (
    <div className='blogs-page'>
      <h1>Latest Blog</h1>
      {
        loader && blogs.map(blog => {
          return <div className='blogs-page-latest' key={blog.id}>
        <h2 className='blog-title'>{blog.title}</h2>
        <p className='blog-content'>{blog.content.slice(0,30)}...</p>
        <h5 className='blog-author'>{blog.author}</h5>
        <Link className='more-read' to={`/details/${blog.id}`}>Read More</Link>
       </div>
      })
    }
    {
      !loader && <Loader/>
    }
    </div>
  )
}

export default Blog