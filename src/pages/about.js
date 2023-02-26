/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TwoWideImgText from '@/components/two-wide-img-text';
import GalleryImage from '@/components/gallery-image';

export default function About() {
  return (
    <div className="flex justify-center pt-12">
      <img
        src="/image2.jpg"
        alt="A clifftop pool overlooking the beach, lit by a sunset"
        className="w-1/2 h-auto p-8 flex justify-center"
      />
      <div className="w-1/2 mx-8 px-4 mt-8 ">
        <h1 className="mt-0 text-3xl pt-4">Our Story</h1>
        <p className="pt-4">
          We are a team of passionate individuals who are committed to providing
          you with a memorable and luxurious stay in Balian Beach.
        </p>
        <p className="pt-4">
          Our Indonesian inspired villas are designed with your comfort and
          convenience in mind, and we pride ourselves on offering top-notch
          amenities and personalized services that cater to your every need.
        </p>
        <p className="pt-4">
          The villas are the perfect blend of comfort, luxury, and relaxation to
          make your stay with us truly unforgettable. We invite you to
          experience the best of Bali at our beautiful villas.
        </p>
        <h1 className="text-3xl pt-8">Our Commitment</h1>
        <p className="pt-4">
          We are proud to donate 20% of our income to local community support
          organizations such as The Lily Lane Early Learning Centre in Ubud, The
          Bali Rainbow Community, which support the LGBT+ community living with
          HIV and AIDS, and directly to the Balian Village via the village
          officers to support elderly residents.
        </p>
        <p className="pt-4">
          By staying at our Villa, you are not only experiencing the beauty of
          Balian Beach but also making a positive impact on the local community.
        </p>
      </div>
    </div>
  );
}
