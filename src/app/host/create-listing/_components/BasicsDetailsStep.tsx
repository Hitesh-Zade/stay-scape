"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/button/Button";
import StepHeader from "./StepHeader";
import { basicTypes as initialBasicTypes } from "../_constants/basicDetailsTypes";

export default function BasicDetailsStep() {
  const [types, setTypes] = useState(initialBasicTypes);

  const handleIncCount = (id: number) => {
    setTypes((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const handleDecCount = (id: number) => {
    setTypes((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count - 1) }
          : item
      )
    );
  };

  return (
    <>
      <StepHeader
        title="Share some basic details about place"
        subtitle="Choose the category that best matches your property."
      />

      {types.map((basicType) => (
        <div
          key={basicType.id}
          className="flex items-center justify-between  mb-10 border-b border-gray-200 pb-3"
        >
          <h3 className="mr-4 text-lg">{basicType.title}</h3>

          <div className="flex items-center">
            <Button
              variant="outline"
              className="p-1 text-sm"
              onClick={() => handleDecCount(basicType.id)}
            >
              <Minus className="h-4.5 w-4.5" />
            </Button>

            <span className="mx-2 w-8 text-center text-lg">
              {basicType.count}
            </span>

            <Button
              variant="outline"
              className="p-1 text-sm"
              onClick={() => handleIncCount(basicType.id)}
            >
              <Plus className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}