import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";

export default function PricingStep() {
  const price = useListingStore((state) => state.price);
  const setPrice = useListingStore((state) => state.setPrice);
  return (
    <>
      <StepHeader
        title="Set your price"
        subtitle="You can always change it later."
      />

      <div>
        <Input
          id="BasePrice"
          label="Base Price"
          placeholder="Enter your Base Price"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(Number(e.target.value))
          }
        />
      </div>
    </>
  );
}
