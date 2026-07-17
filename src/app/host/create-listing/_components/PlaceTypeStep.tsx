import StepHeader from "./StepHeader";
import { placeTypes } from "../_constants/placeTypes";
import { useListingStore } from "@/store/listingStore";

export default function PlaceTypeStep() {
    const setPlaceType = useListingStore((state) => state.setPlaceType);
    const placeType = useListingStore((state) => state.placeType);

  return (
    <>
      <StepHeader
        title="What type of place will guests have?"
        subtitle="Choose the category that best matches your property."
      />
      {placeTypes.map((place) => {
        const Icon = place.icon;
        const selected = placeType === place.id;
        return (
          <div onClick={() => setPlaceType(place.id)} key={place.id}
           className={`border-2 rounded-xl p-5 transition flex items-center justify-between mb-5 
            ${
        selected
          ? "border-black bg-gray-50 border-2"
          : "border-gray-300 hover:border-gray-600"
      }
           `} >
            <div>
              <h3 className="text-lg  font-semibold"> {place.title}</h3>
              <p className="text-gray-500">{place.desc}</p>
            </div>
            <Icon className="h-9 w-9" />
          </div>
        );
      })}
    </>
  );
}
