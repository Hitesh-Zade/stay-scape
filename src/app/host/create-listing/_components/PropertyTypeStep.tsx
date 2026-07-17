import { propertyTypes } from "../_constants/propertyTypes";
import OptionCard from "./OptionCard";
import StepHeader from "../_components/StepHeader";
import { useListingStore } from "@/store/listingStore";


export default function PropertyTypeStep() {
const propertyType = useListingStore((state) => state.propertyType);
const setPropertyType = useListingStore((state) => state.setPropertyType);

  return (
    <>
      <StepHeader
        title="Which of these best describes your place?"
        subtitle="Choose the category that best matches your property."
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 mb-auto">
       {propertyTypes.map((property) => (
        <OptionCard
          key={property.id}
          title={property.title}
          icon={property.icon}
          selected={propertyType === property.id}
          onClick={() => setPropertyType(property.id)}
        />
      ))}
        </div>
    
    </>
  );
}
