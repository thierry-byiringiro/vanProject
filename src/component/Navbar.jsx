import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import icon from '../assets/icon.png';
export default function NavBar() {
  function fakeLogOut() {
    localStorage.removeItem("loggedIn");
  }
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center p-4 h-25 bg-[#FFF7ED]">
        <NavLink to="/" className="hover:underline">
          <h1 className="font-bold text-2xl">#VANLIFE</h1>
        </NavLink>
        <div className="flex text-lg font-bold space-x-10">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""} hover:underline`
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""} hover:underline`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""} hover:underline`
            }
          >
            Vans
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""} hover:underline`
            }
          >
            <img src={icon} alt="the icon avatar" />
          </NavLink>
          <button onClick={fakeLogOut}>X</button>
        </div>
      </div>
    </>
  );
}
