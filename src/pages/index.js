import { Inter } from '@next/font/google';
import Carousel from '@/components/carousel';
import AutoSlider from '@/components/auto-slider';

export default function Home() {
  return (
    <>
      <main>
        <div>
          <AutoSlider />
        </div>
      </main>
    </>
  );
}
