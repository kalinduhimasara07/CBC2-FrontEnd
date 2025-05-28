import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props);
  return (
    <Link to={`/productInfo/${props.product.productId}`}>
      <div className="w-[300px] h-[400px] bg-white shadow-xs rounded-lg flex flex-col  p-4 m-4 cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out">
        <img
          src={props.product.images[0]}
          alt={props.product.ProductName}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <h1 className="text-xl font-bold">{props.product.ProductName}</h1>
        <p className="text-gray-500 text-[12px]">{props.product.productId}</p>
        <p className="text-gray-500 line-clamp-2 mb-2 mt-2">
          {props.product.description}
        </p>
        <p className="text-lg font-semibold text-accent">
          LKR : {props.product.price.toFixed(2)}
        </p>
        {props.product.lastPrice < props.product.price && (
          <p className="text-sm font-semibold text-gray-500 line-through">
            LKR : {props.product.lastPrice.toFixed(2)}
          </p>
        )}
      </div>
    </Link>
  );
}
