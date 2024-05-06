import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Components/Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button
    
    >increment</button>
    {/* <h2></h2> */}
    {/* <h2>0</h2> */}
    <Count/>

    
    <button
    
    >decrement</button>
    </>
  )
}

export default App
