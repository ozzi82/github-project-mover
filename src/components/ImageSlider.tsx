import { useState } from "react";

interface ImageSliderProps {
  dayImage: string;
  nightImage: string;
  productTitle: string;
}

const ImageSlider = ({ dayImage, nightImage, productTitle }: ImageSliderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xl bg-gradient-to-br from-muted/50 to-muted/20 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Day Image (base layer) */}
        <img
          src={dayImage}
          alt={`${productTitle} - Day View`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Night Image (overlay layer) */}
        <img
          src={nightImage}
          alt={`${productTitle} - Night View`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover instruction */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs opacity-80 hover:opacity-100 transition-opacity">
          Hover to see illuminated
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
