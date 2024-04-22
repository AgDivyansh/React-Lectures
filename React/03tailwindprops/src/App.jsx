import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Components/Card'
function App() {
  const [count, setCount] = useState(0)

  let c = <Card /> ;
  return (
    <>
     {/* This is sam */}
<p>This is sample text </p>
{/* <Card /> */}
{c}
<h1>This is displaying the card using the function value stored in a value</h1>
{c}
    </>
  )
}

export default App