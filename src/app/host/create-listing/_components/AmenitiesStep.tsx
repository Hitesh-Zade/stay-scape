"use client"
import StepHeader from "./StepHeader"
import { amenities } from "../_constants/amenitiesType"
import AmenityCard from "./AmenityCard"
import { useListingStore } from "@/store/listingStore";


 

export default function AmenitiesStep(){
    const selectedAmenities = useListingStore(
  (state) => state.amenities
);

const addAmenity = useListingStore(
  (state) => state.addAmenity
);

const removeAmenity = useListingStore(
  (state) => state.removeAmenity
);
return<>
 <StepHeader
        title="Tell guests what your place offers"
        subtitle="Select all the amenities available at your property."
      />
   {
  amenities.map((category) => (
    <div key={category.id} className="mb-10">
      <h2 className="mb-5 text-2xl font-semibold">
        {category.title}
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {category.amenities.map((amenity) => {
          const selected = selectedAmenities.includes(amenity.title);

          return (
            <AmenityCard
              key={amenity.id}
              title={amenity.title}
              description={amenity.description}
              icon={amenity.icon}
              selected={selected}
              onClick={() =>
                selected
                  ? removeAmenity(amenity.title)
                  : addAmenity(amenity.title)
              }
            />
          );
        })}
      </div>
    </div>
  ))
}
</>
}