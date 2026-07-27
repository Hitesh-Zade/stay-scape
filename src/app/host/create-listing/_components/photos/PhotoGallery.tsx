"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { useListingStore } from "@/store/listingStore";
import AddPhotoCard from "./AddPhotoCard";
import PhotoCard from "./PhotoCard";
import AddCoverPhoto from "./AddCoverPhoto";

export interface StepRef {
  validate: () => boolean;
}
const PhotoGallery = forwardRef<StepRef>((props, ref) => {
  const images = useListingStore((state) => state.images);
  const coverImage = useListingStore((state) => state.coverImage);

  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    validate() {
      console.log("aaja bhai");
      if (images.length === 0) {
        alert("Please upload at least one photo.");
        setError("Please upload at least one photo.");
        return false;
      }

      setError("");
      return true;
    },
  }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {coverImage ?  <PhotoCard image={coverImage} index={9999} />  : <AddCoverPhoto />}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <PhotoCard key={index} image={image} index={index} />
        ))}

        <AddPhotoCard />
      </div>
    </div>
  );
});

PhotoGallery.displayName = "PhotoGallery";

export default PhotoGallery;
