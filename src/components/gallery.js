import BlurImage from './blur-image';
import { useState, useEffect } from 'react';
import Carousel from './carousel';

const images = [
  {
    src: '/image1.jpg',
    width: 400,
    height: 300,
  },
  {
    src: '/image5.webp',
    width: 400,
    height: 300,
  },
  {
    src: '/image2.jpg',
    width: 500,
    height: 100,
  },
  {
    src: '/image6.webp',
    width: 1000,
    height: 1000,
  },
  {
    src: '/image3.webp',
    width: 400,
    height: 300,
  },
  {
    src: '/image7.webp',
    width: 400,
    height: 300,
  },
  {
    src: '/image4.webp',
    width: 500,
    height: 500,
  },
  {
    src: '/image9.webp',
    width: 400,
    height: 300,
  },
  {
    src: '/image8.webp',
    width: 2000,
    height: 2000,
  },
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 37) handleMove('left');
    if (e.keyCode === 39) handleMove('right');
    if (e.keyCode === 27) handleClose();
  };

  const handleClick = (image) => {
    setCurrentImage(image);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };

  const handleMove = (direction) => {
    const currentIndex = images.findIndex((img) => img === currentImage);
    const nextIndex =
      direction === 'left'
        ? currentIndex - 1
        : currentIndex + 1 < images.length
        ? currentIndex + 1
        : 0;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleClick(image)}>
              <BlurImage image={image} />
            </div>
          ))}
        </div>
      </div>
      {currentImage && (
        <Carousel
          images={images}
          currentImage={currentImage}
          handleClick={handleClick}
          handleClose={handleClose}
          handleMove={handleMove}
          handleKeyDown={handleKeyDown}
        />
      )}
    </>
  );
};

export default Gallery;
