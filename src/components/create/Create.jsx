import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('mr. martins');
    let [content, setContent] = useState('');
    let cancel = useNavigate();
    const notify = () => toast.success("blog created successfuly!",
    {
        theme: 'dark',
        position: 'top-center',
        duration: 2000
    }
    );

    let toUpd = {
        title,
        author,
        content
    }

    // const handleClick = (e) => {
    //     e.currentTarget.disabled = true;
    //   //   console.log("button clicked");
    //   axios.post(`http://localhost:8000/Blogs/`, toUpd)
    //   .then(res => {
    //       // console.log(`Blog Updated Successfully!`);
    //       notify(); 
    //       setTimeout(() => {
    //           cancel(false);
    //       }, 2000)
    //   })
    //   .catch(err => {
    //       console.log(err.message)
    //   })
    //   };
  

    function handleSubmit(e) {
      e.preventDefault(e);
      e.currentTarget.disabled = true;
    //   console.log(toUpd);
    axios.post(`http://localhost:8000/Blogs/`, toUpd)
    .then(res => {
        // console.log(`Blog Updated Successfully!`);
        notify();
        setTimeout(() => {
            cancel('/blog');
        }, 500)
    })
    .catch(err => {
        console.log(err.message)
    })
    }
  return (
    <div className='blog-create'>
        <h1>Create A New Blog</h1>

        <div className="form">


        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="" className='redlabel'>Title</label>
            <div></div>
            <input
            className='titlefield'
            type="text" 
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
            <div></div>
            <label htmlFor="" className='redlabel'>Content</label>
            <div></div>
            <textarea 
            className='contentfield'
            name="content" 
            cols="60" 
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            ></textarea>
            <div></div>

            <label htmlFor="" className='redlabel'>Authors:  </label>
            <select 
            name="Author"
            onChange={(e) => setAuthor(e.target.value)} 
            value={author}
            >
                <option value="mr.martins">mr. martins</option>
                <option value="mr.experience">mr. experience</option>
                <option value="mrs. ebere">mr. ebere</option>
                <option value="mr.iheukwumere">mr. iheukwumere</option>
            </select>
            <div className='btn'>
                <button className='btn1' onClick={() => cancel('/blog')}>Cancel</button>
                <button className='btn2' onClick={handleSubmit} disabled={!title || !content}>Create Blog</button>
            </div>
        </form>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Create