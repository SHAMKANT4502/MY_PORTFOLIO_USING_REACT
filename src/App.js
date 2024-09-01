import React from 'react';
import "./index.css";
import Home from "./Routs/Home";
import About from "./Routs/About";
import Project from "./Routs/Project";
import Contact from "./Routs/Contact";
import {Route,Routes} from "react-router-dom" ;

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
