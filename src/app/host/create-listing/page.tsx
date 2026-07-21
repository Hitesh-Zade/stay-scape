"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import PropertyTypeStep from "./_components/PropertyTypeStep";
import NavigationButtons from "./_components/NavigationButtons";
import { useListingStore } from "@/store/listingStore";
import PlaceTypeStep from "./_components/PlaceTypeStep";
import AddressStep from "./_components/AddressStep";
import ProgressBar from "./_components/ProgressBar";
import BasicDetailsStep from "./_components/BasicsDetailsStep";
import AmenitiesStep from "./_components/AmenitiesStep";
// import PhotosStep from "./_components/PhotosStep";
import TitleStep from "./_components/TitleStep";
import PricingStep from "./_components/PricingStep";
import ReviewDetailsStep from "./_components/ReviewDetailsStep";

export default function CreateListings() {
  const currentStep = useListingStore((state) => state.currentStep);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PropertyTypeStep />;
      case 2:
        return <PlaceTypeStep />;
      case 3:
        return <AddressStep />;
      case 4:
        return <BasicDetailsStep />;
      case 5:
        return <AmenitiesStep />;
      case 6:
        return <TitleStep />;
      case 7:
        return <PricingStep />;
      case 8:
        return <ReviewDetailsStep />;
      default:
        return <PropertyTypeStep />;
    }
  };
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                StayScape
              </span>
            </Link>
          </div>
        </nav>
        <ProgressBar currentStep={currentStep} totalSteps={8} />
      </header>

      <div className="container-custom py-4 my-18.5 ">
        <div className="mx-auto max-w-2xl">{renderStep()}</div>
      </div>

      <NavigationButtons totalSteps={8} />
    </>
  );
}
