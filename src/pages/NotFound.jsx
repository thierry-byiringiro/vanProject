import { NavLink } from "react-router-dom";

export default function NotFound(){
    return (
        <>
            <div className="flex flex-col p-10 space-y-6">
                <h1  className="w-[494.332763671875px] h-21 font-[inter] text-3xl text-black font-bold">
                    Sorry, the page that you were looking for was not found
                </h1>
                <NavLink to="/" className="w-[494.332763671875px] h-13 flex items-center justify-center text-white font-bold text-xl bg-black rounded-md">Return to home</NavLink>
            </div>
        </>
    )
}