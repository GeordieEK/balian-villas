/* eslint-disable @next/next/no-img-element */
import GalleryImage from '@/components/gallery-image';
import images from '../images/images.json';
import React from 'react';

export default function VillaGanesha() {
  const ganeshaImages = [images[1], images[2], images[3], images[4]];
  return (
    <div className="p-8 pt-10">
      <div className="flex justify-center py-4">
        <h1 className="text-4xl">Villa Ganesha</h1>
        {/* TODO: ADD BOOKING LINK FOR AIRBNB */}
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center mx-56">
          <p className="pb-1">
            <i>For those who like their luxury escapes extra lush.</i>
          </p>
          <p>
            Ganesha features a large tropical garden complete with rare orchids
            and a koi pond with baby turtles.
          </p>
        </div>
        <div className="col-span-12 flex justify-center aspect-w-1 h-[30vw] max-h-96">
          <GalleryImage image={images[5]} />
        </div>
        <div className="text-center col-span-4">
          <h2 className="text-2xl mb-2">Layout</h2>
          <ul>
            <li className="hover:font-medium">
              <i>2 Queen Bedrooms</i>
            </li>
            <li className="hover:font-medium">
              <i>2 Ensuite Bathrooms</i>
            </li>
            <li className="hover:font-medium">
              <i>Full Kitchen</i>
            </li>
            <li className="hover:font-medium">
              <i>Living Room</i>
            </li>
            <li className="hover:font-medium">
              <i>Large Dining Area</i>
            </li>
          </ul>
        </div>
        <div className="text-center col-span-4">
          <h2 className="text-2xl mb-2">Property Features</h2>
          <ul>
            <li className="hover:font-medium">
              <i>Large tropical garden</i>
            </li>
            <li className="hover:font-medium">
              <i>Beachfront</i>
            </li>
            <li className="hover:font-medium">
              <i>Clifftop pool</i>
            </li>
            <li className="hover:font-medium">
              <i>Full Kitchen</i>
            </li>
            <li className="hover:font-medium">
              <i>Fast Wifi</i>
            </li>
            <li className="hover:font-medium">
              <i>TV</i>
            </li>
          </ul>
        </div>
        <div className="text-center col-span-4">
          <ul>
            <h2 className="text-2xl mb-2">Services Included</h2>
            <li className="hover:font-medium">
              <i>Linen & Towels Provided</i>
            </li>
            <li className="hover:font-medium">
              <i>Daily Housekeeping</i>
            </li>
            <li className="hover:font-medium">
              <i>Full Breakfast</i>
            </li>
            <li className="hover:font-medium">
              <i>Staff Available</i>
            </li>
            <li className="hover:font-medium">
              <i>Laundry Service</i>
            </li>
          </ul>
        </div>

        {ganeshaImages.map((image, index) => (
          <div key={index} className="col-span-6 aspect-w-1 h-[30vw] max-h-96 ">
            <GalleryImage image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
