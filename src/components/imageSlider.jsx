import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export default function ImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const prevImage = () => {
    setActiveImage((prev) => {
      setLoading(true);
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const nextImage = () => {
    setActiveImage((prev) => {
      setLoading(true);
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handleImageClick = (index) => {
    setLoading(true);
    setActiveImage(index);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
      {/* Main Image Area */}
      <div className="relative aspect-square group overflow-hidden rounded-xl shadow-md bg-gray-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/40 backdrop-blur-sm">
            <Loader2 className="w-8 h-8 text-gray-500 animate-spin" />
          </div>
        )}
        <img
          src={images[activeImage]}
          alt=""
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 overflow-x-auto px-2 no-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            onClick={() => handleImageClick(index)}
            src={image}
            alt=""
            className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 transition ${
              index === activeImage ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
