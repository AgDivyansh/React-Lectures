import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Count from './Components/Count'
import Count from './Components/Count'
import { useDispatch } from 'react-redux'
function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch() ;
  return (
   <>
   <button
   className='bg-gray-400 p-4 rounded-full'

   onClick={(e) => dispatch({target: 'increment'})}
   >increment</button>

   {/* <h1> divyansh </h1> */}
   {/* <Count/> */}
    <Count/>

   <button
   className='bg-gray-400 p-4 rounded-full'

   onClick={(e) => dispatch({type: 'decrement'})}
   >
    decrement
   </button>

   </>
  )
}

export default App
