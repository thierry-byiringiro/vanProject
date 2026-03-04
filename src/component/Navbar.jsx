import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
export default function NavBar({ Home, About }) {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center p-4 h-25 bg-[#FFF7ED]">
        <Link to="/">
          <h1 className="font-bold text-2xl">#VANLIFE</h1>
        </Link>
        <div className="flex text-lg font-bold space-x-10">
          <NavLink to="/"></NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/vans">Vans</NavLink>
        </div>
      </div>
    </>
  );
}
