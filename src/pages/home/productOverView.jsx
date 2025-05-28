import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotfound";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverView() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading, found, not-found

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${productId}`)
      .then((res) => {
        if (!res.data) return setStatus("not-found");
        setProduct(res.data);
        setStatus("found");
      })
      .catch((err) => {
        console.error(err);
        setStatus("not-found");
      });
  }, [productId]);

  if (status === "loading") {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-b-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "not-found") return <ProductNotFound />;

  return (
    <div className="w-full px-4 py-6 md:px-10 lg:px-20 h-[calc(100vh-100px)] overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left - Image Gallery */}
        <div className="md:w-[45%] w-full">
          <ImageSlider images={product.images} />
        </div>

        {/* Right - Product Info */}
        <div className="md:w-[55%] w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.ProductName}</h1>
          <h2 className="text-xl text-gray-500">{product.altNames.join(" | ")}</h2>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-500 text-lg font-medium">Price:</span>
            {product.price > product.lastPrice && (
              <span className="line-through text-red-500 text-xl">
                LKR {product.price}
              </span>
            )}
            <span className="text-2xl font-semibold text-blue-600">
              LKR {product.lastPrice}
            </span>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow transition duration-300 w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
