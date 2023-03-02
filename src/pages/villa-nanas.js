/* eslint-disable @next/next/no-img-element */
import GalleryImage from '@/components/gallery-image';
import images from '../images/images.json';

import FeatureListItem from '@/components/feature-list-item';

export default function VillaNanas() {
  const nanasImages = [images[5], images[6], images[7], images[1]];

  return (
    <div className="p-8 pt-10">
      <div className="flex justify-center py-4">
        <h1 className="text-4xl mt-6">Villa Nanas</h1>
        {/* TODO: ADD BOOKING LINK FOR AIRBNB */}
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center">
          <p className="pb-1">
            <i>If one pool isn&#39;t enough...</i>
          </p>
          <p className="pb-4">
            Nanas features a tropical plunge pool complete with waterfall.
          </p>
          <button className="bg-[var(--secondary)] hover:bg-[var(--hover)] px-2 py-1 rounded-xl">
            <a href="https://www.airbnb.com.au/rooms/806114656758713131?guests=1&adults=1&s=67&unique_share_id=4ca8ea92-85bb-42c0-b058-87d6a1cca13b">
              BOOK NOW on Airbnb
            </a>
          </button>
        </div>
        <div className="col-span-12 flex justify-center aspect-w-1 h-[30vw] max-h-96">
          <GalleryImage image={images[0]} hoverText={true} />
        </div>
        <div className="text-center col-span-4">
          <h2 className="text-2xl mb-2">Layout</h2>
          <ul>
            <FeatureListItem text="2 Queen Bedrooms" />
            <FeatureListItem text="2 Ensuite Bathrooms" />
            <FeatureListItem text="Full Kitchen" />
            <FeatureListItem text="Living Room" />
            <FeatureListItem text="Large Dining Area" />
          </ul>
        </div>
        <div className="text-center col-span-4">
          <h2 className="text-2xl mb-2">Property Features</h2>
          <ul>
            <FeatureListItem text="Plunge pool with waterfall" />
            <FeatureListItem text="Clifftop pool" />
            <FeatureListItem text="Full Kitchen" />
            <FeatureListItem text="Fast Wifi" />
            <FeatureListItem text="TV" />
          </ul>
        </div>
        <div className="text-center col-span-4">
          <h2 className="text-2xl mb-2">Services Included</h2>
          <ul>
            <FeatureListItem text="Linen & Towels Provided" />
            <FeatureListItem text="Daily Housekeeping" />
            <FeatureListItem text="Full Breakfast" />
            <FeatureListItem text="Staff Available" />
            <FeatureListItem text="Laundry Service" />
          </ul>
        </div>

        {nanasImages.map((image, index) => (
          <div key={index} className="col-span-6 aspect-w-1 h-[30vw] max-h-96 ">
            <GalleryImage image={image} hoverText={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
