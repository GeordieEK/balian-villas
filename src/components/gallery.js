import GalleryImage from "./gallery-image"
import { useState, useEffect } from "react"
import Carousel from "./carousel"
import images from "../images/images.json"

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null)

  const handleClose = () => {
    setCurrentImage(null)
  }

  const handleMove = (direction) => {
    const currentIndex = images.findIndex((img) => img === currentImage)
    const nextIndex =
      direction === "left"
        ? currentIndex - 1
        : currentIndex + 1 < images.length
        ? currentIndex + 1
        : 0
    setCurrentImage(images[nextIndex])
  }

  return (
    <>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {images.map((image, index) => (
            <div key={index} onClick={() => setCurrentImage(image)}>
              <GalleryImage image={image} />
            </div>
          ))}
        </div>
      </div>
      {currentImage && (
        <Carousel
          images={images}
          currentImage={currentImage}
          handleClose={handleClose}
          handleMove={handleMove}
          handleKeyDown={handleKeyDown}
        />
      )}
    </>
  )
}

export default Gallery
