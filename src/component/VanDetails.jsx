import { useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";

export default function VanDetails() {
  const [vanDetail, setVanDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((respose) => respose.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);
  let elType;
  if (vanDetail) {
    elType =
      vanDetail.type === "simple"
        ? "#E17654"
        : vanDetail.type === "rugged"
          ? "#115E59"
          : "#161616";
  }
  return (
    <>
      {vanDetail ? (
        <div className="flex flex-col p-6 space-y-5">
          <img src={vanDetail.imageUrl} className="rounded-md" />
          <button
            className={`selected w-[80.71px] h-[30.89px] rounded-md text-white p-2 flex justify-center items-center  font-semibold`}
            style={{ backgroundColor: elType }}
          >
            {String(vanDetail.type).charAt(0).toUpperCase() + String(vanDetail.type).slice(1)}
          </button>
          <h2 className=" font-bold">{vanDetail.name}</h2>
          <p className="">
            <span className=" font-bold">${vanDetail.price}</span>/day
          </p>
          <p className="font-semibold">{vanDetail.description}</p>
          <button className="w-130 h-10 rounded-sm bg-[#FF8C38] flex  justify-center items-center font-semibold text-white">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
