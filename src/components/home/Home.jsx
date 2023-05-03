import React from 'react'
import { useRecoilState } from 'recoil';
import { likes } from '../global/likes';
import Hooks from '../hooks/Hooks'

const Home = () => {
  // atom step 3
  let[love, setLove] = useRecoilState(likes);
 function sum(a,b) {
  return `${a} + ${b} = ${a+b}`;
 } 
  
  return (
    <div className='home'>
      <h1>Home Page {sum(5, 8)}</h1>
      {/* all data types injavascript can be passed as a prop
      such as: string, number, array, object, null, undefined, NAN, etc
      even functions can also be passed */}
      <h2>love score: {love}</h2>
      <button onClick={() => setLove(love = love + 1)}>Add Love</button>
       <Hooks clause={'All The Time'} plus={sum}/>
    </div>

  )
}

export default Home