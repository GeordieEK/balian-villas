/* eslint-disable @next/next/no-img-element */
import { Inter } from '@next/font/google';
import Carousel from '../components/carousel';
import AutoSlider from '../components/auto-slider';
import TwoWideImgText from '../components/two-wide-img-text';
import AnimationScroll from '@/components/animation-scroll';

export default function Home() {
  return (
    <>
      <main>
        <div className="relative h-screen pointer-events-none overflow-auto">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
            <AutoSlider />
            <h1 className="text-white text-8xl font-sans font-bold tracking-wide text-center absolute top-1/3 left-0 right-0 text-stroke animate-fade-in-up">
              THE VILLAS <br /> BALIAN BEACH
            </h1>
          </div>
        </div>
        {/* Content block */}
        <AnimationScroll>
          <TwoWideImgText
            image="/image4.webp"
            alt=""
            text="Welcome to The Villas, two luxurious and peaceful hideaways on Balian
          Beach, Bali&#39;s best kept secret. Our beautifully appointed villas
          offer the perfect blend of comfort and serenity, making them the ideal
          choice for travelers seeking a tranquil escape from the hustle and
          bustle. The lush tropical surroundings and range of modern amenities
          provide the perfect setting for a rejuvenating and memorable vacation
          experience."
            imageLeft={true}
          />
        </AnimationScroll>
        <AnimationScroll>
          <TwoWideImgText
            image="/image5.webp"
            alt=""
            text="The villas reflect traditional Balinese architecture and style 
            while incorporating all the luxuries and amenities for your comfort and relaxation. 
            Each villa was designed by a local architect and crafted by local artisans using local materials, 
            ensuring a truly authentic Balinese experience."
          />
        </AnimationScroll>
      </main>
    </>
  );
}
