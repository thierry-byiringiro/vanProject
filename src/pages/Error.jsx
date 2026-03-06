import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1 className="font-[inter] text-2xl">
        {error.message || "An unexpected error occurred"}
      </h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  );
}