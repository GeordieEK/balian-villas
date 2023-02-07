import { useEffect, useState, useRef } from 'react';

const Carousel = ({
  images,
  currentImage,
  handleMove,
  handleClose,
  handleKeyDown,
}) => {
  const addListener = useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Create ref for background
  const backgroundRef = useRef(null);

  // Check if background clicked
  const backgroundClick = (e) => {
    if (e.target === backgroundRef.current) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 h-full w-full flex items-center justify-center bg-black bg-opacity-75 "
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={backgroundRef}
      onClick={backgroundClick}
    >
      <div className="relative z-50 p-2 rounded-lg max-w-3xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[85vh]"
        />
        <button
          className="absolute top-0 right-0 p-5 text-white text-l font-bold focus:outline-none hover:text-gray-200 opacity-60"
          onClick={handleClose}
        >
          X
        </button>
        <div className="flex justify-between">
          <button
            className="top-50% transform translate-y-1/2 text-white text-xl font-bold focus:outline-none"
            onClick={() => handleMove('left')}
          >
            &lt;
          </button>
          <button
            className="top-50% transform translate-y-1/2 text-white text-xl font-bold focus:outline-none"
            onClick={() => handleMove('right')}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
