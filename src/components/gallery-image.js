import { useState } from "react"
import Image from "next/image"
import clsx from "clsx"

const GalleryImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <Image
          alt=''
          src={image.src}
          fill={true}
          sizes='100vw,
                50vw,
                33vw'
          style={{ objectFit: "cover" }}
          className={clsx("duration-700 ease-in-out group-hover:opacity-75", {
            "scale-110 blur-2xl grayscale": isLoading,
            "scale-100 blur-0 grayscale-0": !isLoading,
          })}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default GalleryImage
