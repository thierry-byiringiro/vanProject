import { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("type");
  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = typeFilter ? vans.filter(van => String(van.type).toLowerCase() === typeFilter) : vans;
  const vansElement = displayVans.map((element) => {
    const elType =
      element.type === "simple"
        ? "#E17654"
        : element.type === "rugged"
          ? "#115E59"
          : "#161616";

    return (
      <div key={element.id} className="w-50 h-fit flex flex-col justify-center">
        <NavLink
          to={`/vans/${element.id}`}
          aria-label={`View details for ${element.name}, 
                             priced at $${element.price} per day`}
        >
          <img src={element.imageUrl} className="rounded-md w-50 h-50" />
          <div className="flex flex-row justify-between">
            <h3 className=" font-bold">{element.name}</h3>
            <p className="flex flex-col">
              <span className="font-bold">${element.price}</span>
              <span className="-mt-2">/day</span>
            </p>
          </div>
          <button
            className={`selected w-[80.71px] h-[30.89px] rounded-md text-white p-2 flex justify-center items-center -mt-3 font-semibold`}
            style={{ backgroundColor: elType }}
          >
            {element.type}
          </button>
        </NavLink>
      </div>
    );
  });

  return (
    <>
      <h1 className="font-bold text-2xl self-start ml-15">
        Explore our van options
      </h1>
      <div className="w-full flex items-center space-x-8 text-black  ml-30 mt-3">
        <div className="w-87 h-9 flex space-x-5 justify-center items-center">
          <NavLink to="?type=simple" className="w-26 h-9 bg-[#FFEAD0] rounded-md flex items-center justify-center">Simple</NavLink>
          <NavLink to="?type=rugged" className="w-26 h-9 bg-[#FFEAD0] rounded-md flex items-center justify-center">Rugged</NavLink>
          <NavLink to="?type=luxury" className="w-26 h-9 bg-[#FFEAD0] rounded-md flex items-center justify-center">Luxury</NavLink>
        </div>
        <NavLink to="." className="underline">Clear filters</NavLink>
      </div>
      <div className="flex flex-wrap w-full p-6 space-x-3 h-fit justify-center items-center gap-6">
        {vansElement}
      </div>
    </>
  );
}
