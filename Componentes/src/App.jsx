import React from "react";
import Layout from "./components/Layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from './pages/Booking'
import Pagenotfound from './pages/Pagenotfound'
import Form from "./pages/Form";

function App(){
  return(
    
<div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/booking" element={<Booking/>}/>
  <Route path="/form" element={<Form/>}  />

  <Route path="*" element={<Pagenotfound/>}/>

  
</Routes>
</BrowserRouter>
</div>
  )
}

export default App;
  
   
   
 



