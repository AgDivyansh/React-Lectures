import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)
const [themeMode, setThemeMode] = useState("light") ;
const darkTheme = () => {
  setThemeMode("dark") ;
}

const lightTheme = () => {
  setThemeMode("light")
}


// actual change in a theme 

useEffect(() => {
  
document.querySelector('html').classList.remove("light", "dark") ;
document.querySelector('html').classList.add(themeMode) ;

  
}, [themeMode])


  return (
    // <ThemeProvider value={{themeMoode, darkTheme, lightTheme}} >
    // <h1 className='bg-gray-700 p-4 rounded-3xl text-3xl'>Chai</h1>
    // </ThemeProvider>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}} >
     {/* <h1 className='bg-gray-700 p-4 rounded-3xl text-3xl'>Chai</h1> */}
     <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* <ThemeBtn /> */}
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/* <Card /> */}
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
