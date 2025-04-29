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
import EditProductForm from "./admin/editProductFrom";

function AdminHomePage() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <aside className="border-r shadow-md w-64 p-6 flex flex-col bg-blue-600 items-center">
        <h2 className="text-3xl font-bold text-white mb-12 mt-12">Admin Panel</h2>
        <nav className="space-y-5 text-gray-900 text-2xl">
          <Link
            to="/admin/"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <AiOutlineDashboard size={30} />
            Dashboard
          </Link>
          <Link
            to="/admin/product"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <AiOutlineShoppingCart size={30} />
            Products
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <AiOutlineShopping size={30} />
            Orders
          </Link>
          <Link
            to="/admin/customers"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <AiOutlineUser size={30} />
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
          <Route path="/product/editProduct" element={<EditProductForm />} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminHomePage;
