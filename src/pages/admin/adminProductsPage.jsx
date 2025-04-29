import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/product").then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductsLoaded(true);
      });
    }
  }, [productsLoaded]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/admin/product/addProduct"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        title="Add Product"
      >
        <FaPlus size={20} />
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Products Page
      </h1>

      {!productsLoaded ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="w-[60px] h-[60px] border-[4px] border-gray-400 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Product ID
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Product Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Price ($)
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Last Price ($)
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Stock
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Description
                </th>
                <th className="text-center px-6 py-3 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.productId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.ProductName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ${product.lastPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="flex justify-center items-center space-x-4">
                      <button
                        className="text-blue-500 hover:text-blue-700 transition"
                        onClick={() => navigate(`/admin/product/editProduct`, { state: {product:product} })}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 transition"
                        onClick={() => {
                          const token = localStorage.getItem("token");
                          axios
                            .delete(
                              import.meta.env.VITE_BACKEND_URL +
                                `/product/${product.productId}`,
                              {
                                headers: { Authorization: `Bearer ${token}` },
                              }
                            )
                            .then((res) => {
                              console.log(res.data);
                              toast.success("Product deleted successfully");
                              setProductsLoaded(false);
                            });
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No products available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
