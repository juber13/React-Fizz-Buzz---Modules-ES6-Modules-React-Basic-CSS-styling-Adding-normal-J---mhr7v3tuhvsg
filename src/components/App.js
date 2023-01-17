// import React from 'react'
import '../styles/App.css';
import React , { useState } from 'react';
const App = () => {
  const [counter , setCounter] = useState(1);
  const [color , setColor] = useState();
 
 
  function fizzOrBuzz() {
    if(counter % 3 == 0) setColor("fizz")
    else if(counter % 5 == 0) setColor("buzz")
    else if ((counter % 3 == 0) && (counter % 5 == 0)) setColor('fizzbuzz')
     else setColor('normal');
  }

  // fizzOrBuzz();
  
 const handleDecrease = () => {
   if(counter > 1) setCounter(counter - 1);
     fizzOrBuzz();
  }

  const handleIncrease = () => {
    setCounter(counter + 1);
    fizzOrBuzz();
  }


 

  return (
    <div id="main">
      <button id="increment" onClick={handleIncrease}>increment</button>
      <div id="counter" className={color || 'normal'}>{counter}</div>
      <button id="decrement" onClick={handleDecrease}>decrement</button>
    </div>
  )

}


export default App;
