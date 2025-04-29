import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "./loginPage";
import ProductOverView from "./home/productOverView";

function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="w-full h-[calc(100vh-100px)]  ">
        <Routes path="/">
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/productInfo/:id" element={<ProductOverView/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 flex flex-col items-center justify-center text-center px-6">
<div className="bg-primary">
  <h1 className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md">
    Welcome to Our Website!
  </h1>
  <p className="text-lg text-gray-700 mb-8 max-w-xl">
    Discover new features, explore content, and connect with others.
  </p>

  <button
    className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out mb-6"
    onClick={() => alert("Explore clicked!")}
  >
    Explore
  </button>

  <p className="text-gray-600">
    Already a user?{" "}
    <Link
      to="/login"
      className="text-indigo-700 font-semibold hover:underline"
    >
      Login here
    </Link>
  </p>
</div>
</div> */
}
