import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {FcCancel} from 'react-icons/fc'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //! toast step 1

const Update = ({id, blog, cancel}) => {
    let [title, setTitle] = useState(blog.title);
    let [author, setAuthor] = useState(blog.author);
    let [content, setContent] = useState(blog.content);

    const notify = () => toast.success("blog updated successfuly!", //! toast step 2
    {
        theme: 'dark',
        position: 'top-center',
        duration: 2000
    }
    );

    const handleClick = (e) => {
      e.currentTarget.disabled = true;
    //   console.log("button clicked");
    axios.patch(`http://localhost:8000/Blogs/${id}`, toUpd)
    .then(res => {
        // console.log(`Blog Updated Successfully!`);
        notify(); 
        setTimeout(() => {
            cancel(false);
        }, 2000)
    })
    .catch(err => {
        console.log(err.message)
    })
    };

    let toUpd = {
        title,
        author,
        content
    }

    function handleSubmit(e) {
      e.preventDefault(e);
    //   console.log(toUpd);
    axios.patch(`http://localhost:8000/Blogs/${id}`, toUpd)
    .then(res => {
        // console.log(`Blog Updated Successfully!`);
        notify(); //! toast step 4
        setTimeout(() => {
            cancel(false);
        }, 2000)
    })
    .catch(err => {
        console.log(err.message)
    })
    }
  return (
    <div>
        <h1>Blog Update for Blog No. {id}</h1>

        <div className="form">



        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="">Title</label>
            <div></div>
            <input 
            type="text" 
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <button></button>
            <div></div>
            <label htmlFor="">Content</label>
            <div></div>
            <textarea 
            name="content" 
            cols="60" 
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            
            ></textarea>
            <div></div>

            <label htmlFor="">Authors</label>
            <select 
            name="Author"
            onChange={(e) => setAuthor(e.target.value)} 
            value={author}
            >
                <option value="mr.martins">mr. martins</option>
                <option value="mr.experience">mr. experience</option>
                <option value="mrs. ebere">mrs. ebere</option>
                <option value="mr.iheukwumere">mr. iheukwumere</option>
            </select>
            <div className='btn'>
                <button onClick={() => cancel(false)} title='cancel'><FcCancel/></button>
                <button onClick={handleClick} disabled={!title || !content}>Update</button>
            </div>
        </form>
        </div>
        <ToastContainer/> {/*//! toast step: 3*/}
    </div>
  )
}

export default Update