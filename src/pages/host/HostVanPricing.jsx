import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const vanDetail = useOutletContext();
  return (
    <>
      <h1 className="text-2xl ml-5"><b>${vanDetail.price}</b>/day</h1>
    </>
  );
}
