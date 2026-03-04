import NavBar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto">
        <div className="w-140 h-full bg-[url('/imgs.png')] bg-cover bg-center text-white">
          <div className="flex flex-col justify-between items-center space-y-10 p-4">
            <h1 className="font-extrabold mt-15 text-[40px] font-[inter]">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="text-[18px] font-[inter] font-normal">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <button className="w-100 h-10 rounded-sm bg-[#FF8C38] flex  justify-center items-center font-semibold">
              Find your van
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
