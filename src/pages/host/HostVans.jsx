import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../assets/api";
import { requireAuth } from "../../assets/utils";
export async function loader({ request }) {
  await requireAuth(request);
  return await getHostVans();
}
export default function HostVans() {
  const hostVan = useLoaderData();
  const getHostVans = hostVan.map((element) => (
    <NavLink key={element.id} to={`${element.id}`}>
      <div
        key={element.id}
        className="w-123.5 h-30.25 bg-[#FFFFFF] rounded-md flex flex-row items-center p-4 space-x-6"
      >
        <img src={element.imageUrl} alt="" className="w-25 h-25 rounded-md " />
        <div>
          <h1 className="font-bold">{element.name}</h1>$
          <span>{element.price}</span>/day
        </div>
      </div>
    </NavLink>
  ));

  return (
    <>
      <div className="flex flex-col space-y-6 p-4">
        <h1 className="font-bold text-3xl">Your listed Vans</h1>
        {getHostVans}
      </div>
    </>
  );
}
