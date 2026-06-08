import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function Register() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      toast.error("Passwords do not match");

      return;
    }

    try {

      await API.post("/user/register", {
        name,
        password,
      });

      toast.success("Registration Successful ✈️");

      navigate("/login");

    } catch (err) {

      console.log(err);

      toast.error("Registration Failed");
    }
  };

  return (

    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-5xl font-bold text-center text-blue-600 mb-10">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-5 rounded-2xl text-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-5 rounded-2xl text-lg"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border p-5 rounded-2xl text-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6 text-lg">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;