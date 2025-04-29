export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="text-6xl">😕</div>
      <div className="text-3xl font-semibold text-gray-800">
        Product Not Found
      </div>
      <p className="text-gray-500 text-center max-w-md">
        Sorry, we couldn't find the product you're looking for. Please check the
        URL or try searching again.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Go Back Home
      </button>
    </div>
  );
}
