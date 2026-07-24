import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { Address, useListingStore } from "@/store/listingStore";
import { forwardRef, useImperativeHandle, useState } from "react";
import { validateAddress } from "@/hooks/useAddressValidation";

export interface AddressStepRef {
  validate: () => boolean;
}

const AddressStep = forwardRef<AddressStepRef>((_, ref) => {
  const address = useListingStore((state) => state.address);
  const updateAddress = useListingStore((state) => state.updateAddress);
  const [errors, setErrors] = useState<Partial<Record<keyof Address, string>>>(
    {},
  );
  useImperativeHandle(ref, () => ({
    validate() {
      const validationErrors = validateAddress(address);

      setErrors(validationErrors);

      return Object.keys(validationErrors).length === 0;
    },
  }));

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
          onChange={(e) => {
            updateAddress({ address: e.target.value });

            if (errors.address) {
              setErrors((prev) => ({
                ...prev,
                address: "",
              }));
            }
          }}
          error={errors.address}
        />
        <Input
          id="street"
          label="Street"
          placeholder="Enter your Street"
          name="street"
          value={address.street}
        onChange={(e) => {
    updateAddress({ street: e.target.value });

    if (errors.street) {
      setErrors((prev) => ({
        ...prev,
        street: "",
      }));
    }
  }}
          error={errors.street}
        />
        <Input
          id="city"
          label="City"
          placeholder="Enter your City"
          name="city"
          value={address.city}
          onChange={(e) => {
    updateAddress({ city: e.target.value });

    if (errors.city) {
      setErrors((prev) => ({
        ...prev,
        city: "",
      }));
    }
  }}
          error={errors.city}
        />
        <Input
          id="state"
          label="State"
          placeholder="Enter your State"
          name="state"
          value={address.state}
          onChange={(e) => {
    updateAddress({ state: e.target.value });

    if (errors.state) {
      setErrors((prev) => ({
        ...prev,
        state: "",
      }));
    }
  }}
          error={errors.state}
        />
        <Input
          id="pin"
          label="Pin"
          placeholder="Enter your Pin"
          name="pin"
          value={address.pincode}
         onChange={(e) => {
    updateAddress({ pincode: e.target.value });

    if (errors.pincode) {
      setErrors((prev) => ({
        ...prev,
        pincode: "",
      }));
    }
  }}
          error={errors.pincode}
        />
        <Input
          id="country"
          label="Country"
          placeholder="Enter your Country"
          className=""
          name="country"
          value={address.country}
         onChange={(e) => {
    updateAddress({ country: e.target.value });

    if (errors.country) {
      setErrors((prev) => ({
        ...prev,
        country: "",
      }));
    }
  }}
          error={errors.country}
        />
      </div>
    </>
  );
});
AddressStep.displayName = "AddressStep";

export default AddressStep;
