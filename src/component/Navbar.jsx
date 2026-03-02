import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function NavBar({ Home, About }) {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-bold text-2xl">#VANLIFE</h1>
        <BrowserRouter className="flex flex-row text-lg font-bold ">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/about">
            About
          </Link>
          <Routes >
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
