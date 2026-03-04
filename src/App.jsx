import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import About from "../src/component/About.jsx";
import Home from "./component/Home.jsx";
import Vans from "./component/Vans.jsx";
import VanDetails from "./component/VanDetails.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout.jsx";

function App() {
  return (
    <>
      <div className="w-140 h-fit mt-10 flex flex-col justify-center items-center mx-auto bg-white">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
