import { useState } from "react";
import { Navigate, useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../assets/api";
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({request}) {
  const formData = await request.formData();
  const email = formData.get("email")
  const password = formData.get("password")
  const data = await loginUser({email,password});
return null;
}
export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((el) => {
        navigate("/host", { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => setStatus("idle"));
  }
  const message = useLoaderData();

  return (
    <div className="login-container flex flex-col items-center px-6.75 w-full p-6">
      <h1 className="font-bold text-3xl p-3 -mt-2">Sign in to your account</h1>
      {message && (
        <h2 className="font-bold text-2xl p-2 text-red-700">{message}</h2>
      )}
      {error && <p className="font-bold text-lg p-2 text-red-700">⚠️{error}</p>}

      <Form method="post" className="login-form flex flex-col w-full h-full">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="border border-gray-300 h-10 indent-2.5 font-['inter'] shadow-sm font-normal rounded-md focus:outline-none"
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border border-gray-300 h-10 indent-2.5 font-['inter'] shadow-sm font-normal rounded-md  focus:outline-none"
        />

        <button
          disabled={status === "submitting"}
          className="bg-[#ff8c38] border-none rounded-md h-13.75 mt-5.5 text-white font-['Inter']"
        >
          {status === "idle" ? "Log in" : "Logging In...."}
        </button>
      </Form>
    </div>
  );
}
