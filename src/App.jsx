import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Menu from './Components/Menu'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = "/" element = {<Login/>}/>

    //   </Routes>
    
    // </BrowserRouter>
    <>
      <Menu/>
    </>
  )
}

export default App
