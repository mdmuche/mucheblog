import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Update from '../update/Update';
import { AiOutlineDelete, AiFillStepBackward } from  'react-icons/ai';
import {RiEditLine} from 'react-icons/ri';
import Dialog from '../dialog/Dialog';
import './Details.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    let { id } = useParams();
    let redirects = useNavigate();
    let [blog, setBlog] = useState('');
    let [show, setShow] = useState(false);
    let [dialog, setDialog] = useState(false);
    let [answer, setAnswer] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:8000/Blogs/${id}`)
        .then(res => {
            setBlog(res.data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [show])

    function yes () {
      setAnswer(true);
      setDialog(false);
      if (answer === true){
        handleDelete();
      }
    }

    function no () {
      setAnswer(false);
      setDialog(false);
    }

    function handleDelete() {
      axios.delete(`http://localhost:8000/Blogs/${id}`)
      .then(res => {
        // console.log(`Blog with id of ${id} was deleted succesfully!`);
        notify();
        setTimeout(() => {
          redirects('/blog');
        }, 2000);
        })
        .catch(err => {
          console.log(err.message);
      })
    }

    const notify = () => toast.success("blog deleted successfuly!",
    {
      theme: 'dark',
      position: 'top-center',
      duration: 2000
  }
  );

  return (
    <div>
      { !show &&
        <div className='blog-details'>
        <h1>Blog Details for Blog No. {id}</h1>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <h5>{blog.author}</h5>

        <div className='details-btn'>
           <button className='btn1' onClick={() => redirects('/blog')}title='back'><AiFillStepBackward className='details-back'/></button>
           <button className='btn2' onClick={() => setDialog(true)}title='delete'><AiOutlineDelete className='details-delete' /></button>
           <button className='btn3' onClick={() => setShow(true)}title='edit'><RiEditLine className='details-edit' /></button>
        </div>
        </div>
         }

         {
          dialog &&
          <Dialog setAnswer={setAnswer} setDialog={setDialog} yes={yes} no={no} />
         }
         { show &&
           <Update cancel = {setShow} id = {id} blog = {blog}/>
         }
         <ToastContainer/>
    </div>
  )
}

export default Details