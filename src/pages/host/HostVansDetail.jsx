import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const params = useParams();
  console.log(params)
  const [vanDetail, setVanDetail] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.vans[0])
        return setVanDetail(data.vans)
      });
  }, []);
  if (!vanDetail) {
     return <h1>Loading ...</h1>;
  }
  const elType =
    vanDetail.type === "simple"
      ? "#E17654"
      : vanDetail.type === "rugged"
        ? "#115E59"
        : "#161616";
  return (
    <>
      <NavLink to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </NavLink>
      <div className="flex flex-col w-124 h-fit bg-white p-4 mb-5 rounded-sm">
        <div
          key={vanDetail.id}
          className="rounded-md flex flex-row items-center p-4 space-x-6"
        >
          <img
            src={vanDetail.imageUrl}
            alt=""
            className="w-[160.14px] h-[157.90px] rounded-md "
          />
          <div>
            <button
              className={`selected w-[80.71px] h-[30.89px] rounded-md text-white p-2 flex justify-center items-center -mt-3 font-semibold`}
              style={{ backgroundColor: "#E17654" }}
            >
              {vanDetail.type}
            </button>
            <h1 className="font-bold text-3xl">{vanDetail.name}</h1>
            <span className="font-bold">${vanDetail.price}</span>/day
          </div>
        </div>
        <nav className="flex flex-row space-x-8 font-bold w-full justify-start py-4 px-6">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""}`
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              `${isActive ? "underline text-green-600" : ""}`
            }
          >
            Photos
          </NavLink>
        </nav>
        <Outlet  context={vanDetail}/>
      </div>
    </>
  );
}
