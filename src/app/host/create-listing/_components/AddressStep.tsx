import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
export default function AddressStep() {
  return (
    <>
      <StepHeader
        title="Where is your place located?"
        subtitle="Your address won't be shared until a booking is confirmed."
      />
      <div className="mxo mt-10 space-y-4">
        <Input id="address" label="Address" placeholder="Enter your Address" />
        <Input id="street" label="Street" placeholder="Enter your Street" />
        <Input id="city" label="City" placeholder="Enter your City" />
        <Input id="pin" label="Pin" placeholder="Enter your Pin" />
        <Input id="state" label="State" placeholder="Enter your State" />
        <Input
          id="country"
          label="Country"
          placeholder="Enter your Country"
          className="mb-18"
        />
      </div>
    </>
  );
}
