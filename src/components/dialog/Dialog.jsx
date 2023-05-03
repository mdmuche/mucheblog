import React from 'react'
import './Dialog.scss'

const Dialog = ({yes, no}) => {
  return (
    <div className='outerlayer'>
        <div className='layer'>
           <div className='head'><h3>Notification</h3></div>
           <button className='notify-x' onClick={()=> no()}>X</button>
           </div>
           <p>Do you really want to delete this blog?</p>
           <div className='flex-btn'>
           <button className='notify-btn1' onClick={()=> no()}>NO</button>
           <button className='notify-btn2' onClick={()=> yes()}>YES</button>
           </div>
    </div>
  )
}

export default Dialog