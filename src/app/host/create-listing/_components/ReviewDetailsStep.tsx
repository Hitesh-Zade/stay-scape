import ReviewCard from "./ReviewCard";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";

export default function ReviewDetailsStep() {
  const store = useListingStore.getState();
  console.log();

  return (
    <>
      <StepHeader
        title="Review your listing"
        subtitle="Check all the details before publishing."
      />
      <ReviewCard
        title="Property Details"
        onEdit={() => store.setCurrentStep(1)}
      >
        <div className="flex ">
          <p>Property Type:</p>
          <p className="ml-2">{store.propertyType}</p>
        </div>
        <div className="flex">
          <p>Place Type:</p>
          <p className="ml-2">{store.placeType}</p>
        </div>
      </ReviewCard>
      <ReviewCard title="Location" onEdit={() => store.setCurrentStep(3)}>
        <p>{store.address.address}</p>
        <p>{store.address.street}</p>
        <p>
          {store.address.city}, {store.address.state}{" "}
        </p>
        <p>
          {store.address.country}, {store.address.pincode}{" "}
        </p>
      </ReviewCard>
      <ReviewCard title="Basic Details" onEdit={() => store.setCurrentStep(4)}>
        <div className="flex ">
          <p>Guests:</p>
          <p className="ml-2">{store.basicDetails.guests}</p>
        </div>
        <div className="flex">
          <p>Bedrooms:</p>
          <p className="ml-2">{store.basicDetails.bedrooms}</p>
        </div>
        <div className="flex">
          <p>Beds:</p>
          <p className="ml-2">{store.basicDetails.beds}</p>
        </div>
        <div className="flex">
          <p>Bathrooms:</p>
          <p className="ml-2">{store.basicDetails.bathrooms}</p>
        </div>
      </ReviewCard>
      <ReviewCard title="Amenities" onEdit={() => store.setCurrentStep(5)}>
        <div className="flex flex-row flex-wrap">
          {store.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-md bg-gray-100 px-3 m-2 py-1 text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </ReviewCard>

      <ReviewCard title="Description" onEdit={() => store.setCurrentStep(6)}>
        <div className=" ">
          <p className="font-bold">Title</p>
          <p>{store.title}</p>
        </div>
        <div className="">
          <p className="font-bold">Description:</p>
          <p>{store.description}</p>
        </div>
      </ReviewCard>

       <ReviewCard title="Pricing" onEdit={() => store.setCurrentStep(7)}>
        <div className=" ">
          <p>₹{store.price} / night</p>
        </div>
      </ReviewCard>
      <br />
      <br />
      <br />
    </>
  );
}
