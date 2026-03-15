import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx";
import VanDetails, {
  loader as vanDetailLoader,
} from "./pages/vans/VanDetails.jsx";
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
import HostVans, { loader as hostVanLoader } from "./pages/host/HostVans.jsx";
import HostVanDetail, {
  loader as HostVanDetailLoader,
} from "./pages/host/HostVansDetail.jsx";
import HostVanInfo from "./pages/host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./pages/Error.jsx";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login.jsx";
import { requireAuth } from "./assets/utils.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
        errorElement={<Error />}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
        HydrateFallback={() => <h1>Loading Vans...</h1>}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            return requireAuth(request);
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          HydrateFallback={() => <h1>Loading Vans...</h1>}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={HostVanDetailLoader}
          HydrateFallback={() => <h1>Loading Vans...</h1>}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
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
