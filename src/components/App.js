import React from 'react'
import '../styles/App.css';
// import React , { useState } from 'react';
const App = () => {
//  const [value , setValue] = useState(1);
  
  return (
    <div id="main">
      <button id="increment">increment</button>
      <div id="counter">{value}</div>
      <button id="decrement">decrement</button>
    </div>
  )
}


export default App;
