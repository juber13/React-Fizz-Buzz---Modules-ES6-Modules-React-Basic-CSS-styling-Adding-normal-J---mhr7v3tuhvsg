// import React from 'react'
import '../styles/App.css';
import React , { useState } from 'react';
const App = () => {
  const [counter , setCounter] = useState(1);
  const [color , setColor] = useState();
 
 
  const setClassName = () => {
    if ((counter % 3 == 0) && (counter % 5 == 0)) return 'fizzbuzz';
    if(counter % 3 == 0) return "fizz";
    if(counter % 5 == 0) return "buzz"
     return 'normal';
  }
  return (
    <div id="main">
      <button id="increment" onClick={() => setCounter(counter + 1)}>increment</button>
      <div id="counter" className={setClassName()}>{counter}</div>
      <button id="decrement" onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  )

}


export default App;
