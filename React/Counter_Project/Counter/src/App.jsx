import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5) ;

  // let counter = 15 ;

  // const addValue = () => {
  //   // counter++ ;
  //   counter = counter + 1 ;
  //   console.log("increase is clicked : ",Math.random());
  // }
  // const decreasevalue = () => {
  //   // counter-- ;
  //   counter = counter - 1 ;
  //   console.log("drecrease is clicked : ",Math.random());
    
  // }
  const addvalue = () => {
    counter = counter + 1 ;
    console.log("Add is clicked : "+counter);
    setcounter(counter) ; 

  }
  const decrease = () => {
    if (counter <= 0) {
      counter = 0 ;
      setcounter(counter) ;
      // console.log(`reached the min limit of the counter`);
      alert(`reached the min limit of the counter`) ;
      return ;
    }
    counter = counter - 1 ;
    console.log(`Decrese is clicked : ${counter}`);
    setcounter(counter) ;
  }
  
  
  return (
    <>
      
      <h1>Welcome Divyansh Agarwal</h1>
     <p>Counter value is : {counter} </p>
     <button
     onClick={addvalue}
     >Add value {counter} </button>
     <br />
     <button
     onClick={decrease}
     >Decrease value : {counter} </button>
     {/* <img src=" " alt="" /> */}

    </>
  )
}

export default App
