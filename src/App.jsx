import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/vans/Vans.jsx";
import VanDetails from "./pages/vans/VanDetails.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/vans/Layout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import HostLayout from "./component/HostLayout.jsx";
import HostVans from "./pages/host/HostVans.jsx";
import HostVanDetail from "./pages/host/HostVansDetail.jsx";
import HostVanInfo from "./pages/host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";

function App() {
  return (
    <>
      <div className="w-140 h-fit mt-10 flex flex-col justify-center items-center mx-auto bg-[#FFF7ED]">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetails />} />
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
