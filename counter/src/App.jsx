import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]  = useState(0)
  // let counter = 0;

  const addValue = () =>{
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // counter = counter + 1;
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
  }
  const removeValue = () =>{
    if(counter >= 1)setCounter(counter - 1)
  }
  return (
    <>
    <h1>The Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <br />
    <p>Footer {counter}</p>
    </>
    
  )
}

export default App
