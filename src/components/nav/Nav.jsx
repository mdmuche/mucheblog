import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { likes } from '../global/likes';
import './Nav.scss';

const Nav = () => {
  let love = useRecoilValue(likes);
  return (
    <div>
        <div className="links">
            {/* browser router step: 3 */}
            <ol>
                <li className='logo'><Link to={'/'}>logo</Link></li>
                <li className='blog'><Link to={'/blog'}>Blog</Link></li>
                <li className='about'><Link to={'/about'}>About</Link></li>
                <h5 className='count-love'>Goal[{love}]</h5>
                <li className='create'><Link to={'/create'}>Create Blog</Link></li>
                <li className='more'><Link to={' '}>&#9776;</Link></li>
                
            </ol>
        </div>

    </div>
  )
}

export default Nav