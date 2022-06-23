import React, { useState } from 'react';



function Counter() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className=''>
      <button onClick={increment}> Like </button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter;
