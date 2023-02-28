import { useEffect, useState, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const Carousel = ({ currentImage, handleMove, handleClose, handleKeyDown }) => {
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
      <div className="relative max-w-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[85vh] transition-opacity rounded-xl duration-500 ease-in-out"
        />
        {/* <div
          style={{ backgroundImage: 'url(' + currentImage.src + ')' }}
          aria-label={currentImage.alt}
          className="absolute inset-0 h-full w-full bg-center bg-cover rounded-2xl duration-500"
        ></div> */}
        <button
          className="absolute top-2 right-2 text-white  focus:outline-none hover:text-gray-200 opacity-60"
          onClick={handleClose}
        >
          <CgClose size={20} />
        </button>
        <div>
          <button className="absolute top-1/2 text-white opacity-70 focus:outline-none">
            <BsChevronCompactLeft
              size={25}
              onClick={() => handleMove('left')}
            />
          </button>
          <button className="absolute top-1/2 right-0  text-white opacity-70 focus:outline-none">
            <BsChevronCompactRight
              size={25}
              onClick={() => handleMove('right')}
            />
          </button>
        </div>
        <p className="flex justify-center mt-2 bg-transparent">
          {currentImage.alt}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
