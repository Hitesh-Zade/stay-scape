"use client";

import { useListingStore } from "@/store/listingStore";
import { Button } from "@/components/button/Button";

interface NavigationButtonsProps {
  totalSteps: number;
}

export default function NavigationButtons({
  totalSteps,
}: NavigationButtonsProps) {
  const currentStep = useListingStore((state) => state.currentStep);
  const nextStep = useListingStore((state) => state.nextStep);
  const previousStep = useListingStore((state) => state.previousStep);
  const handleNext = () =>{
    console.log(currentStep)
     nextStep();
  }
  return (
    <footer className="fixed bottom-0 z-50 left-0 right-0 backdrop-blur-lg border-t border-gray-200 bg-white ">
      <div className="container-custom py-4">
      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={previousStep}
           className="px-6"
        >
          Back
        </Button>

        <Button
          variant="primary"
         onClick={handleNext}
         className="px-6"
        >
          {currentStep === totalSteps ? "Publish" : "Next"}
        </Button>
      </div>
      </div>
    </footer>
  );
}