export async function getVans() {
  const res = await fetch("/api/vans");

  if (!res.ok) {
    throw new Error("Failed to fetch vans");
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Server returned non-JSON response. Try refreshing again.");
  }

  const data = await res.json();
  return data.vans;
}
