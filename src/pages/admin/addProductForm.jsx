import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imagefiles, setImageFiles] = useState([]);
  const [productPrice, setProductPrice] = useState("");
  const [productLastPrice, setProductLastPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    const altnames = alternativeNames.split(",");

    const promiseArray = [];

    for (let i = 0; i < imagefiles.length; i++) {
      promiseArray[i] = uploadMediaToSupabase(imagefiles[i]);
    }

    const imgurl = await Promise.all(promiseArray);

    const product = {
      productId: productId,
      ProductName: productName,
      altNames: altnames,
      images: imgurl,
      description: productDescription,
      price: productPrice,
      lastPrice: productLastPrice,
      stock: productStock,
    };

    const token = localStorage.getItem("token");
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/product", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/product");
      toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alternative Names"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={alternativeNames}
          onChange={(e) => setAlternativeNames(e.target.value)}
        />
        <input
          type="file"
          placeholder="Image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setImageFiles(e.target.files)}
          multiple
        />
        <input
          type="number"
          placeholder="Product Price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Last Price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productLastPrice}
          onChange={(e) => setProductLastPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Stock"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          rows={3}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
