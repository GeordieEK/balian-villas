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
            <h1 className="text-white text-8xl font-bold tracking-wide text-center absolute top-1/3 left-0 right-0 text-stroke animate-fade-in-up">
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
            text="Phasellus quis pretium nulla, et malesuada sem. 
          Vivamus sit amet orci eu sapien posuere bibendum. Phasellus pulvinar elementum leo eu sodales. 
          Nullam interdum nisi libero, sit amet pulvinar urna ultricies et. Praesent at felis nec quam molestie ullamcorper vel in nisi. 
          In vel tempor risus. Ut mattis ex vel consequat interdum. Integer vel elit ligula. 
          Aliquam vulputate lobortis nibh, at hendrerit ante porta eu. 
          Sed a ante in neque commodo ultrices. Nullam et consectetur felis."
          />
        </AnimationScroll>
      </main>
    </>
  );
}
