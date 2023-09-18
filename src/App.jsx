import { useState } from 'react'
import './App.css'

function App() {


  // This is the hook to set counter method
  const [counter, setCounter] = useState(0)

  // let counter = 5;

  // This is add value 
  const addValue = ()=>{
    if(counter<20)
    {
      setCounter(counter+1)
    }
    console.log("Value added",counter);
    // counter = counter+1;
  }

  // This is remove value
  const removeValue = ()=>{
    if(counter>0)
    {
      setCounter(counter-1);
    }
    console.log("value ramoved",counter)
  }

  return (
    <>
    <h1 className='text-5xl text-green-500'>Number Counter.... </h1>
    <br></br>
    <h3>couter value :{counter}</h3>
    <br></br>
    <button onClick={addValue}>Add value</button>
    <br /><br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
