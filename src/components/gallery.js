import GalleryImage from './gallery-image';
import { useState } from 'react';
import Carousel from './carousel';
import images from '../images/images.json';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 37) handleMove('left');
    if (e.keyCode === 39) handleMove('right');
    if (e.keyCode === 27) handleClose();
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
      <div className="flex justify-center mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image, index) => (
            <div key={index} onClick={() => setCurrentImage(image)}>
              <div className="overflow-hidden h-72 w-72 rounded-lg bg-gray-200 border">
                <GalleryImage image={image} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentImage && (
        <div>
          <Carousel
            images={images}
            currentImage={currentImage}
            handleClose={handleClose}
            handleMove={handleMove}
            handleKeyDown={handleKeyDown}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
