import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import NotFound from "./errorPage";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

function AdminHomePage() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <aside className="border-r shadow-md w-64 p-6 flex flex-col bg-blue-300">
        <h2 className="text-xl font-bold text-red-500 mb-8">Admin Panel</h2>
        <nav className="space-y-5 text-gray-700">
          <Link
            to="/admin/"
            className="flex items-center gap-3 hover:text-red-500 transition"
          >
            <AiOutlineDashboard size={20} />
            Dashboard
          </Link>
          <Link
            to="/admin/product"
            className="flex items-center gap-3 hover:text-red-500 transition"
          >
            <AiOutlineShoppingCart size={20} />
            Products
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-3 hover:text-red-500 transition"
          >
            <AiOutlineShopping size={20} />
            Orders
          </Link>
          <Link
            to="/admin/customers"
            className="flex items-center gap-3 hover:text-red-500 transition"
          >
            <AiOutlineUser size={20} />
            Customers
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 ">
        <Routes path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/product" element={<AdminProductsPage />} />
          <Route path="/product/addProduct" element={<AddProductForm />} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminHomePage;
