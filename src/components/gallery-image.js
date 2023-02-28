import { useState } from 'react';
import Image from 'next/image';

const GalleryImage = ({ image, hoverText }) => {
  const [isLoading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div
      className="relative group w-full h-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        alt=""
        src={image.src}
        fill={true}
        sizes="100vw,
                50vw,
                33vw"
        style={{ objectFit: 'cover' }}
        className={cn(
          'duration-500 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-105 blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
      {/* Display text on hover */}
      {hoverText && hover && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white">{image.alt}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
