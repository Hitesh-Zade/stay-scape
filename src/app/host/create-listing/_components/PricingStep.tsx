import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

export interface PricingStepRef {
  validate: () => boolean;
}

const PricingStep = forwardRef<PricingStepRef>((_, ref) => {
  const price = useListingStore((state) => state.price);
  const setPrice = useListingStore((state) => state.setPrice);

  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    validate() {
      if (!price || price <= 0) {
        setError("Price must be greater than 0");
        return false;
      }

      setError("");
      return true;
    },
  }));

  return (
    <>
      <StepHeader
        title="Set your price"
        subtitle="You can always change it later."
      />

      <Input
        id="BasePrice"
        label="Base Price"
        placeholder="Enter your Base Price"
        type="number"
        value={price}
        error={error}
        onChange={(e) => {
          const value = Number(e.target.value);

          setPrice(value);

          if (error) {
            setError("");
          }
        }}
      />
    </>
  );
});

PricingStep.displayName = "PricingStep";

export default PricingStep;