import React from "react";

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
}

const PixelBorder: React.FC<PixelBorderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main content */}
      <div className="relative z-10 h-full w-full border-2 border-white bg-gray-800">
        {children}
      </div>

      {/* Pixel border effect */}
      <div className="absolute -inset-1 z-0 border-2 border-pink-500 translate-x-1 translate-y-1"></div>
      <div className="absolute -inset-2 z-0 border-2 border-gray-500 translate-x-2 translate-y-2"></div>
    </div>
  );
};

export default PixelBorder;
