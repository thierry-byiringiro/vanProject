import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex flex-row space-x-8 font-bold w-full justify-start py-4 px-6">
        <NavLink to="/host" className={({isActive}) => `${isActive ? "underline text-green-600":""}`}>Dashboard</NavLink>
        <NavLink to="/host/income" className={({isActive}) => `${isActive ? "underline text-green-600":""}`}>Income</NavLink>
        <NavLink to="/host/reviews" className={({isActive}) => `${isActive ? "underline text-green-600":""}`}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
