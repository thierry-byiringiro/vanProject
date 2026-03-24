import { useEffect, useState, Suspense } from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import { getVans } from "../../assets/api";
import {
  NavLink,
  useLoaderData,
  useSearchParams,
  Await,
  Form,
} from "react-router-dom";
export async function loader() {
  return {
    vans: getVans(),
  };
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  let typeFilter = searchParams.get("type");
  const vansPromise = useLoaderData();

  const handleFilters = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const isType = searchParams.has("type");
  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  }
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleFilters("type", value || null);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl self-start ml-15">
          Explore our van options
        </h1>
        <form>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            className="border w-40 mr-5 ring-1 ring-black"
          />
        </form>
      </div>
      <Suspense fallback={<h2>Loading vans....</h2>}>
        <Await resolve={vansPromise.vans}>
          {(loadedVans) => {
            const displayVans = typeFilter
              ? loadedVans.filter((van) =>
                  String(van.type).toLowerCase().includes(typeFilter),
                )
              : loadedVans;
            return (
              <>
                <div className="w-full flex items-center space-x-8 text-black  ml-30 mt-3">
                  <div className="w-87 h-9 flex space-x-5 justify-center items-center">
                    <button
                      onClick={() => handleFilters("type", "simple")}
                      className={`w-26 h-9  ${typeFilter === "simple" ? "bg-[#E17654]" : "bg-[#FFEAD0]"} rounded-md flex items-center justify-center cursor-pointer`}
                    >
                      Simple
                    </button>
                    <button
                      onClick={() => handleFilters("type", "rugged")}
                      className={`w-26 h-9  ${typeFilter === "rugged" ? "bg-[#115E59]" : "bg-[#FFEAD0]"} rounded-md flex items-center justify-center cursor-pointer`}
                    >
                      Rugged
                    </button>
                    <button
                      onClick={() => handleFilters("type", "luxury")}
                      className={`w-26 h-9  ${typeFilter === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0]"} rounded-md flex items-center justify-center cursor-pointer`}
                    >
                      Luxury
                    </button>
                  </div>
                  {isType && (
                    <button
                      onClick={() => handleFilters("type", null)}
                      className="underline cursor-pointer"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap w-full p-6 space-x-3 h-fit justify-center items-center gap-6">
                  {displayVans.map((element) => {
                    const elType =
                      element.type === "simple"
                        ? "#E17654"
                        : element.type === "rugged"
                          ? "#115E59"
                          : "#161616";

                    return (
                      <div
                        key={element.id}
                        className="w-50 h-fit flex flex-col justify-center"
                      >
                        <NavLink
                          to={`${element.id}`}
                          state={{ searchP: searchParams.toString() }}
                          aria-label={`View details for ${element.name}, priced at $${element.price} per day`}
                        >
                          <img
                            src={element.imageUrl}
                            className="rounded-md w-50 h-50"
                          />

                          <div className="flex flex-row justify-between">
                            <h3 className="font-bold">{element.name}</h3>

                            <p className="flex flex-col">
                              <span className="font-bold">
                                ${element.price}
                              </span>
                              <span className="-mt-2">/day</span>
                            </p>
                          </div>

                          <button
                            className="selected w-[80.71px] h-[30.89px] rounded-md text-white p-2 flex justify-center items-center -mt-3 font-semibold"
                            style={{ backgroundColor: elType }}
                          >
                            {element.type}
                          </button>
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
