"use client"

import PhotoGallery from "./photos/PhotoGallery"
import StepHeader from "./StepHeader"

export default function PhotosStep(){
    return<>
    <StepHeader
            title="Add some photos of your place"
            subtitle="High-quality photos help attract more guests"
          />
          <div className="">
              <PhotoGallery/>
          </div>
    </>
}