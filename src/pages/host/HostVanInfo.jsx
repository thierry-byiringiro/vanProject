import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const vanDetail = useOutletContext();
  return (
    <>
      <div className="ml-5 flex flex-col space-y-2">
        <div className="w-full flex space-x-1">
          <h1 className="font-semibold text-xl">Name:</h1>
          <span className=" text-lg">{vanDetail.name}</span>
        </div>
        <div className="w-full flex space-x-1">
          <h1 className="font-semibold text-xl">Category: </h1>
          <span className="text-lg">{vanDetail.type}</span>
        </div>
        <div className="w-full flex space-x-1 flex-wrap">
          <h1 className="font-semibold text-xl">Description: </h1>
          <span className="text-lg">{vanDetail.description}</span>
        </div>
        <h4>
          Visibility: <span>Public</span>
        </h4>
      </div>
    </>
  );
}
