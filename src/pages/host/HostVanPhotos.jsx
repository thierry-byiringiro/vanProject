import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const vanDetail = useOutletContext();
  return (
    <>
      <img
        src={vanDetail.imageUrl}
        alt=""
        className="w-[160.14px] h-[157.90px] rounded-md ml-5"
      />
    </>
  );
}
