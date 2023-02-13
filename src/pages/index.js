import { Inter } from '@next/font/google';
import Carousel from '@/components/carousel';
import AutoSlider from '@/components/auto-slider';

export default function Home() {
  return (
    <>
      <main>
        <div>
          <AutoSlider />
          <h1 className="text-white text-8xl font-bold tracking-wide text-center absolute top-1/3 left-0 right-0 text-stroke draw-animation">
            THE VILLAS <br /> BALIAN BEACH
          </h1>
        </div>
      </main>
    </>
  );
}
