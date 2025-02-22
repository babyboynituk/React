import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]  =useState(15)
  
  const addValue=()=>{
    if(counter<20)
    setCounter(counter+1)

    console.log("value added:",counter)
  }
  const removeValue=()=>{
    
    if( counter>0){
    setCounter(counter-1)}
  }
  
   

  return (
    <>
    <h1>  counter Value:{counter}</h1>
    <h2>Remove Value</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
     
    </>
  )
}

export default App
