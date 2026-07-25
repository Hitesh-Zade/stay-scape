"use client";
import { CldImage } from 'next-cloudinary';
import { Button } from "@/components/button/Button";
import { Plus, X } from "lucide-react";
import UploadDropzone from "./UploadDropzone";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
}
export default function UploadPhotoModal({open, onClose}:(UploadModalProps)){
      if (!open) return null;
    return <>
      return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="relative border-b border-gray-300 px-6 py-4">
          <button
            onClick={onClose}
            className="absolute left-5 top-5 text-gray-700 hover:text-black"
          >
            <X size={18} />
          </button>

          <div className="text-center">
            <h2 className="font-semibold text-gray-900">
              Upload photos
            </h2>
            <p className="text-xs text-gray-500">
              No items selected
            </p>
          </div>

          <button className="absolute right-5 top-5 text-gray-700 hover:text-black">
            <Plus size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5"> 
            <UploadDropzone/>
        </div>
 <CldImage
            src="cld-sample-5" // Use this sample image or upload your own via the Media Library
            width="500" // Transform the image: auto-crop to square aspect_ratio
            height="500"
            crop={{
              type: 'auto',
              source: true
            }} alt={''}    />
        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-300 px-7 py-4">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Done
          </Button>

          <Button
            variant="primary"
           disabled
            className=""
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
    </>
}