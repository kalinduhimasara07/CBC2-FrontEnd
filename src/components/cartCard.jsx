import axios from "axios";
import { useEffect, useState } from "react";
import { deleteItem } from "../utils/cartFunction";

export default function CartCard(props) {
  const productId = props.productId;
  const qty = props.qty;
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + `/api/product/` + productId)
        .then((response) => {
          if (response.data != null) {
            setProduct(response.data);
            console.log(response.data);
            setLoaded(true);
          } else {
            console.error("Product not found:", productId);
            deleteItem(productId);
          }
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [productId]);

  return (
    <div className="w-[600px] flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-200">
      <img
        src={product?.images[0]}
        alt={product?.name}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1 ml-4 mr-4">
        <h3 className="text-lg font-semibold">
          {product?.ProductName.slice(0, 20)}
        </h3>
        <p className="text-gray-600">${product?.price}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-bold">{productId}</span>
      <span>X</span>
      <span>{qty}</span>
      <span className="text-gray-600">Total: ${product?.price * qty}</span>
      </div>
      <button
        onClick={() => props.onRemove(productId)}
        className="text-red-500 hover:text-red-700 m-3"
      >
        Remove
      </button>
    </div>
  );
}
