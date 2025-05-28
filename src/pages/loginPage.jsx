import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("Your Email");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error("Invalid Credentials");
          return;
        }
        toast.success("Login Successfull");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        if (res.data.user.role == "admin") {
          console.log("admin");
          navigate("/admin/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-200 flex items-center justify-center px-4 h-[calc(100vh-100px)]">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        {/* <form className="space-y-5"> */}
        <div className="space-y-5">
          <div>
            <label
              className="block text-gray-600 text-sm mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-600 text-sm mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            onClick={login}
          >
            Login
          </button>
          {/* </form> */}
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-700 font-medium hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
