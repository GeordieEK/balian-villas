/* eslint-disable @next/next/no-img-element */
import { Inter } from '@next/font/google';
import Carousel from '../components/carousel';
import AutoSlider from '../components/auto-slider';

export default function Home() {
  return (
    <>
      <main>
        <div className="relative h-screen pointer-events-none overflow-auto">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
            <AutoSlider />
            <h1 className="text-white text-8xl font-bold tracking-wide text-center absolute top-1/3 left-0 right-0 text-stroke draw-animation">
              THE VILLAS <br /> BALIAN BEACH
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-full">
          <div className="w-1/2 h-auto p-16 flex justify-center">
            {/* TODO: Add Alts */}
            <img src={'/image4.webp'} alt="" loading="lazy" />
          </div>
          <div className="w-1/2 px-32 text-center flex justify-center items-center">
            Welcome to The Villas, two luxurious and peaceful hideaways on
            Balian Beach, Bali&#39;s best kept secret. Our beautifully appointed
            villas offer the perfect blend of comfort and serenity, making them
            the ideal choice for travelers seeking a tranquil escape from the
            hustle and bustle. The lush tropical surroundings and range of
            modern amenities provide the perfect setting for a rejuvenating and
            memorable vacation experience.
          </div>
        </div>
      </main>
    </>
  );
}
