import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/user/login", {
        name,
        password,
      });

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save username
      localStorage.setItem("username", name);

      toast.success("Login Successful ✈️");

      if (name === "admin") {

  navigate("/admin");

} else {

  navigate("/flights");
}

    } catch (err) {

      console.log(err);

      toast.error("Invalid Credentials");
    }
  };

  return (

    <div className="min-h-screen bg-blue-50 flex justify-center items-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-xl">

        <h1 className="text-6xl font-bold text-center text-blue-600 mb-10">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-8"
        >

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-6 rounded-2xl text-2xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-6 rounded-2xl text-2xl"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-2xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-xl mt-8">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;