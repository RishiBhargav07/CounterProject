import { useState } from 'react';
import './App.css'


function App() {
  const [counter,setCounter]=useState(15)
  let AddValue = () =>{
    console.log("clicked");
    
   setCounter(counter+1);
}
let reduceValue = () =>{
    console.log("clicked");
    
   setCounter(counter-1);
}
  //let counter = 5;
  return (
    <>
      <h1>HELLO</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Increase Value: {counter}</button>
      <br />
      <button onClick={reduceValue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App
