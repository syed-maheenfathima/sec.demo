// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       </div>
//   )
// }

// export default App

import { useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Head from "./Components/base.jsx";
import { Footer } from "./Components/base.jsx";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg"; // or use import viteLogo from "/vite.svg";
import Home from "./Pages/home.jsx";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Head/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

  
    </div>
  );
}

export default App;
