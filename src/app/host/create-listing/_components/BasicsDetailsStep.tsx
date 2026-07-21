"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/button/Button";
import StepHeader from "./StepHeader";
import { basicTypes as initialBasicTypes } from "../_constants/basicDetailsTypes";
import { useListingStore } from "@/store/listingStore";

export default function BasicDetailsStep() {
  const basicDetails = useListingStore((state) => state.basicDetails);
    const updateBasicDetails = useListingStore((state) => state.updateBasicDetails);
  const handleIncCount = (key: keyof typeof basicDetails) => {
  updateBasicDetails({
    [key]: basicDetails[key] + 1,
  });
};

 const handleDecCount = (key: keyof typeof basicDetails) => {
  updateBasicDetails({
    [key]: Math.max(0, basicDetails[key] - 1),
  });
};



  return (
    <>
      <StepHeader
        title="Share some basic details about place"
        subtitle="Choose the category that best matches your property."
      />

      {initialBasicTypes.map((basicType) => (
        <div
          key={basicType.id}
          className="flex items-center justify-between  mb-10 border-b border-gray-200 pb-3"
        >
          <h3 className="mr-4 text-lg">  {basicType.title}</h3>

          <div className="flex items-center">
            <Button
              variant="outline"
              className="p-1 text-sm"
              onClick={() => handleDecCount(basicType.key)}
            >
              <Minus className="h-4.5 w-4.5" />
            </Button>

            <span className="mx-2 w-8 text-center text-lg">
              {basicDetails[basicType.key]}
            </span>

            <Button
              variant="outline"
              className="p-1 text-sm"
              onClick={() => handleIncCount(basicType.key)}
            >
              <Plus className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}