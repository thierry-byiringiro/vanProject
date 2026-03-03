import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import About from "../src/component/About.jsx";
import Home from "./component/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./component/test.jsx";

function App() {
  return (
    <>
      <div className="w-140 h-fit mt-10 flex flex-col justify-center items-center mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/about" element={<About/>}/>  
          </Routes>          
        </BrowserRouter>
      </div>
      <Test/>
    </>
  );
}

export default App;
