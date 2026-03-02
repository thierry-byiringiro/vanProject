import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../src/component/About.jsx";
import Home from "./component/Home.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
      <Link className="text-2xl font-bold p-3" to='/'>Home</Link>
      <Link className="text-2xl font-bold p-3" to='/about'>About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
