import React, { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../assets/api";
import { requireAuth } from "../../assets/utils";
import { BsStarFill } from "react-icons/bs";

export async function loader({ request }) {
  await requireAuth(request);
  return { vans: getHostVans() };
}

export default function Dashboard() {
  const loaderData = useLoaderData();
  return (
    <>
      <section className="w-full p-4 bg-[#ffead0] px-6.7 py-9.25 flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-[36px] text-[#161616] m-0">Welcome!</h1>

          <p className="text-[#4d4d4d]">
            Income last <span className="underline font-bold">30 days</span>
          </p>

          <h2 className="text-[38px] text-[#161616] font-black m-0">$2,260</h2>
        </div>

        <Link to="income" className="font-semibold">
          Details
        </Link>
      </section>

      <section className="w-full bg-[#ffddb2] p-6.5 flex items-center">
        <h2 className="m-0 font-semibold">Review score</h2>

        <BsStarFill className="text-[#ff8c38] ml-3 text-[25px]" />

        <p className="ml-1.25 text-[20px] text-[#4d4d4d] mr-auto">
          <span className="font-bold text-[#161616]">5.0</span>/5
        </p>

        <Link to="reviews" className="font-semibold">
          Details
        </Link>
      </section>

      <section className="w-full px-6.5 py-9.5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your listed vans</h2>

          <Link to="vans" className="font-semibold">
            View all
          </Link>
        </div>

        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.vans}>
            {(vans) =>
              vans.map((van) => (
                <div
                  key={van.id}
                  className="flex items-center justify-between bg-white p-4 rounded-md mb-4"
                >
                  <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div className="flex flex-col ml-4 grow">
                    <h3 className="font-semibold text-[#161616]">{van.name}</h3>
                    <p className="text-[#4d4d4d]">${van.price}/day</p>
                  </div>

                  <Link to={`vans/${van.id}`} className="text-sm font-semibold">
                    View
                  </Link>
                </div>
              ))
            }
          </Await>
        </Suspense>
      </section>
    </>
  );
}
