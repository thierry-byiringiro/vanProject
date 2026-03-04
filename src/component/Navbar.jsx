import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center p-4 h-25 bg-[#FFF7ED]">
        <NavLink to="/" className="hover:underline">
          <h1 className="font-bold text-2xl">#VANLIFE</h1>
        </NavLink>
        <div className="flex text-lg font-bold space-x-10">
          <NavLink to="/" className="hover:underline"></NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
          <NavLink to="/vans" className="hover:underline">Vans</NavLink>
        </div>
      </div>
    </>
  );
}
