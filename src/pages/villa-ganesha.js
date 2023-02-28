/* eslint-disable @next/next/no-img-element */
import GalleryImage from '@/components/gallery-image';
import images from '../images/images.json';

import FeatureListItem from '@/components/feature-list-item';

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
          <p className="pb-4">
            <button className="bg-[var(--secondary)] hover:bg-[var(--hover)] px-2 py-1 rounded-xl">
              <a href="https://www.airbnb.com.au/rooms/799930133973608175?guests=1&adults=1&s=67&unique_share_id=3d855819-f4b2-45ee-ad2f-52978d408442">
                BOOK NOW on Airbnb
              </a>
            </button>
          </p>
          <p className="pb-1">
            <i>For those who like their luxury escapes extra lush.</i>
          </p>
          <p>
            Ganesha features a large tropical garden complete with rare orchids
            and a koi pond with baby turtles.
          </p>
        </div>
        <div className="col-span-12 flex justify-center aspect-w-1 h-[30vw] max-h-96">
          <GalleryImage image={images[5]} hoverText={true} />
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
            <FeatureListItem text="Large tropical garden" />
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

        {ganeshaImages.map((image, index) => (
          <div key={index} className="col-span-6 aspect-w-1 h-[30vw] max-h-96 ">
            <GalleryImage image={image} hoverText={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
