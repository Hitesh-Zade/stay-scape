import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";

export default function AddressStep() {
  const address = useListingStore((state) => state.address);
  const updateAddress = useListingStore((state) => state.updateAddress);

  return (
    <>
      <StepHeader
        title="Where is your place located?"
        subtitle="Your address won't be shared until a booking is confirmed."
      />
      <div className="mxo mt-10 space-y-4">
        <Input
          id="address"
          name="address"
          label="Address"
          placeholder="Enter your Address"
          value={address.address}
          onChange={(e) => updateAddress({ address: e.target.value })}
        />
        <Input
          id="street"
          label="Street"
          placeholder="Enter your Street"
          name="street"
          value={address.street}
          onChange={(e) => updateAddress({ street: e.target.value })}
        />
        <Input
          id="city"
          label="City"
          placeholder="Enter your City"
          name="city"
          value={address.city}
          onChange={(e) => updateAddress({ city: e.target.value })}
        />
        <Input
          id="pin"
          label="Pin"
          placeholder="Enter your Pin"
          name="pin"
          value={address.pincode}
          onChange={(e) => updateAddress({ pincode: e.target.value })}
        />
        <Input
          id="state"
          label="State"
          placeholder="Enter your State"
          name="state"
          value={address.state}
          onChange={(e) => updateAddress({ state: e.target.value })}
        />
        <Input
          id="country"
          label="Country"
          placeholder="Enter your Country"
          className="mb-18"
          name="country"
          value={address.country}
          onChange={(e) => updateAddress({ country: e.target.value })}
        />
      </div>
    </>
  );
}
