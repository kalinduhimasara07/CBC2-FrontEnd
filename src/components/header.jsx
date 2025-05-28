import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-white w-full h-[100px] relative flex items-center justify-center shadow-md">
        <img
          src="/logo.png"
          alt=""
          className="h-full rounded-full cursor-pointer absolute left-4"
        />
        <div className="flex items-center justify-between gap-4 w-[500px]">
          <Link
            to="/"
            className="text-accent font-bold text-xl hover:underline"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-accent font-bold text-xl hover:underline"
          >
            Products
          </Link>
          <Link
            to="/"
            className="text-accent font-bold text-xl hover:underline"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-accent font-bold text-xl hover:underline"
          >
            Contact us
          </Link>
        </div>
      </header>
    </div>
  );
}
