import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function NavBar({ Home, About }) {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center p-4 h-25 bg-[#FFF7ED]">
        <h1 className="font-bold text-2xl">#VANLIFE</h1>
        <div className="flex text-lg font-bold space-x-10">
          <button>Home</button>
          <button>About</button>
        </div>
      </div>
    </>
  );
}
