import { useState } from "react";
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container flex flex-col items-center px-6.75 w-full p-6">
      <h1 className="font-bold text-3xl p-3 -mt-2">Sign in to your account</h1>

      <form
        onSubmit={handleSubmit}
        className="login-form flex flex-col w-full h-full"
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          className="border border-gray-300 h-10 indent-2.5 font-['Inter'] shadow-sm font-normal rounded-md focus:outline-none"
        />
            <br />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          className="border border-gray-300 h-10 indent-2.5 font-['Inter'] shadow-sm font-normal rounded-md  focus:outline-none"
        />

        <button className="bg-[#ff8c38] border-none rounded-md h-13.75 mt-5.5 text-white font-['Inter']">
          Log in
        </button>
      </form>
    </div>
  );
}
