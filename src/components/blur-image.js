import { useState } from 'react';
import Image from 'next/image';

const BlurImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true);

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.src}
          fill={true}
          sizes="100vw,
                50vw,
                33vw"
          style={{ objectFit: 'cover' }}
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default BlurImage;
