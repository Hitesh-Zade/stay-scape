"use client";

import { useListingStore } from "@/store/listingStore";
import { Button } from "@/components/button/Button";
import { useListingActions } from "@/hooks/useListingActions";
import { useRouter } from "next/navigation";
import type { RefObject } from "react";

export interface StepRef {
  validate: () => boolean;
}
interface NavigationButtonsProps {
  totalSteps: number;
  stepRef?: RefObject<StepRef | null>;
}

export default function NavigationButtons({
  totalSteps,
  stepRef,
}: NavigationButtonsProps) {
  const router = useRouter();
  const { handleStep } = useListingActions();
  const currentStep = useListingStore((state) => state.currentStep);
  const nextStep = useListingStore((state) => state.nextStep);
  const previousStep = useListingStore((state) => state.previousStep);

  const handlePrevious = async () => {
    await previousStep();

    if (currentStep === 1) {
      router.replace("listings");
    }
  };
  const handleNext = async () => {
    if (stepRef?.current) {
      const isValid = stepRef.current.validate();
      if (!isValid) return;
    }
    

    await handleStep();

    if (currentStep < totalSteps) {
      nextStep();
    }
  };

  return (
    <footer className="fixed bottom-0 z-50 left-0 right-0 backdrop-blur-lg border-t border-gray-200 bg-white ">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Button variant="secondary" onClick={handlePrevious} className="px-6">
            Back
          </Button>

          <Button variant="primary" onClick={handleNext} className="px-6">
            {currentStep === totalSteps ? "Publish" : "Next"}
          </Button>
        </div>
      </div>
    </footer>
  );
}
