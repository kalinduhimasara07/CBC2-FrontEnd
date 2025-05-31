import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";
import CartCard from "../../components/cartCard";

export default function Cart() {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        setCart(loadCart());
    }
    , []);
    return (
        <div className="w-full h-full flex flex-col items-center p-4">
            {
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <CartCard
                            productId={item.productId}
                            qty={item.qty}
                            onRemove={() => handleRemove(item.productId)}
                        />
                    </div>
                ))
            }
            <button className=" bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out mb-6">
                Checkout
            </button>
        </div>
    );
}