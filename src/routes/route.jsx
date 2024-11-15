import { Route, Routes } from "react-router-dom"
import Home from "../components/Home.jsx";
import About from "../components/About.jsx"
const route =()=>{
    return(
        <>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/project" />
            <Route path="/contact" />
             */}
        </Routes>
        </>
    )
}
export default route;