import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (error && error.redirectTo) {
    window.location.href = error.redirectTo;
    return null;
  }
  return (
    <div className="error-container">
      <h1 className="font-[inter] text-2xl">
        {error.statusText || error.message || "An unexpected error occurred"}
      </h1>
      <pre>
        {error.status} {error.status && "-"} {error.data || "Check console for details"}
      </pre>
    </div>
  );
}