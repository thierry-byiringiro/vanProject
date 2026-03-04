import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vansElement = vans.map((element) => {
    const elType = element.type === 'simple' ? "#E17654" : element.type === 'rugged' ? "#115E59" : "#161616";
    
    return(
    <div key={element.id} className="w-50 h-fit flex flex-col justify-center">
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
        style={{backgroundColor : elType}}
      >
        {element.type}
      </button>
    </div>
  )
});

  return (
    <>
      <NavBar />
      <h1 className="font-bold text-2xl self-start ml-15">
        Explore our van options
      </h1>
      <div className="flex flex-wrap w-full p-6 space-x-3 h-fit justify-center items-center gap-6">
        {vansElement}
      </div>
      <Footer />
    </>
  );
}
