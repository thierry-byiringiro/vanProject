import Footer from "./Footer";
import NavBar from "./Navbar";

export default function About() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto font-[inter] bg-white text-black ">
        <div className="w-full h-full  flex flex-col">
          <img src="/imgas.png" alt="" />
          <div className="flex flex-col p-5 space-y-5">
            <h1 className=" font-extrabold text-[33px] leading-tight">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <div className="flex flex-col space-y-6 font-medium">
              <p className="text-[16px] ">
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉
              </p>
              <p>
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </p>
            </div>
            <div className="w-full h-49  bg-[#FFCC8D] rounded-md flex flex-col justify-center gap-5 font-[inter] p-6">
              <div className="font-bold text-[32px]">
                <h1 className="">Your destination is waiting.</h1>
                <h1>Your van is Ready.</h1>
              </div>
              <button className="w-40 flex items-center justify-center bg-black text-white p-2 rounded-md font-[inter] font-semibold">
                Explore Our vans
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
