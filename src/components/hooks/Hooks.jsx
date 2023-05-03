import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { likes } from '../global/likes';
import './Hooks.scss'

const Hooks = ({clause, plus}) => {
    let [count, setCount] = useState(0); //! declaring a useState variable
    // ? count is the in itial value entered in the parenthesis
    //? setCount is a function that useState return to update count at any time
  function add() {
    setCount(count = count + 1);                            
    // count++;
    console.log(count);
  }
  let  [styles,setStyles] = useState('');
  let Love = useRecoilValue(likes);

function subt() {
    setCount(count = count - 1)
}
let c = 0;
useEffect(() => {
  c++;
  setTimeout(() => {
    setCount((count)=> count + 1);

  },2000);
  console.log('first', c);
}, [c]);

  return (
    <div>
      <hr />
      <h3>Hooks Page</h3>
      <h4>count: {count}</h4>
      <button onClick={()=> add()}>Add One</button>
      <button onClick={()=> subt()}>Substract One</button>
      <div className={styles}>
        <h1>Changing theme: {styles}</h1>
        <p>
          <h5>likes: {Love}</h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quaerat dolores odio sed quam ducimus deleniti neque sequi officia iste necessitatibus dolorum aspernatur ab! Voluptas illum quam, dicta nemo neque molestiae tempora fugiat deleniti hic ipsam quo quidem perferendis numquam, consectetur nam? Aliquam minus, dignissimos vero enim et tempora iste ipsam aperiam laboriosam nesciunt, eius architecto nisi ad dolorem hic vel eum fuga aut accusamus deserunt necessitatibus? Nemo porro ipsam neque ratione soluta sit voluptatibus deserunt dignissimos, in rem aspernatur.</p>
        <h2>i love coding {clause}</h2>
        <h3>{plus(5,17)}</h3>
        <button onClick={()=> setStyles('')}>Default</button>
        <button onClick={()=> setStyles('red')}>RED</button>
        <button onClick={()=> setStyles('blue')}>BLUE</button>
        <button onClick={()=> setStyles('yellow')}>YELLOW</button>
        <button onClick={()=> setStyles('green')}>GREEN</button>
      </div>
    </div>
  )
}

export default Hooks