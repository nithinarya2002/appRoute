import {Link,Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

export default function Menu(){

    return(
        <>
           <Link to = "/">Home</Link>
           <Link to = "/about">About</Link>
           <Link to = "/contact">Contact</Link>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
           </Routes>
        </>
    )
}