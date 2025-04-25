import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-pink-100 to-purple-200 text-center px-4">
      <h1 className="text-7xl font-extrabold text-red-500 mb-4 drop-shadow-lg">
        404
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
