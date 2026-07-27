"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import PhotoCard from "./photos/PhotoCard";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";
import AddPhotoCard from "./photos/AddPhotoCard";
import AddCoverPhoto from "./photos/AddCoverPhoto";
import CoverPhotoCard from "./photos/CoverPhotoCard";
export interface StepRef {
  validate: () => boolean;
}

const PhotosStep = forwardRef<StepRef>((props, ref) => {
  const images = useListingStore((state) => state.images);
  const coverImage = useListingStore((state) => state.coverImage);
  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    validate() {
      if (!coverImage.trim()) {
        setError("Please upload Cover Image.");
        return false;
      }

      setError("");
      return true;
    },
  }));
  return (
    <>
      <StepHeader
        title="Add some photos of your place"
        subtitle="High-quality photos help attract more guests"
      />
      <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          {error && <p className="text-sm text-red-500">{error}</p>}
          {coverImage ? (
            <CoverPhotoCard image={coverImage} />
          ) : (
            <AddCoverPhoto />
          )}
        </div>
        <div className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map((image, index) => (
              <PhotoCard key={index} image={image} index={index} />
            ))}

            <AddPhotoCard />
          </div>
        </div>
      </div>
    </>
  );
});

PhotosStep.displayName = "PhotosStep";

export default PhotosStep;
