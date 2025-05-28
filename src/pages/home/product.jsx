import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading"); // loading, loaded error

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/product")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          toast.error("Error fetching product data");
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="w-full h-full bg-gray-200 overflow-y-scroll flex flex-wrap justify-center gap-4 p-4">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}
