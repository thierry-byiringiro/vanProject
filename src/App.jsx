import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx";
import VanDetails from "./pages/vans/VanDetails.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
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
import NotFound from "./pages/NotFound.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
        HydrateFallback={() => <h1>Loading Vans...</h1>}
      />
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
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <div className="w-140 h-fit mt-10 flex flex-col justify-center items-center mx-auto bg-[#FFF7ED]">
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
      </div>
    </>
  );
}

export default App;
