import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";

export default function Cart() {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        setCart(loadCart());
    }
    , []);
    return (
        <div className="container">
            {
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h2>Product ID: {item.productId}</h2>
                        <p>Quantity: {item.qty}</p>
                    </div>
                ))
            }
        </div>
    );
}