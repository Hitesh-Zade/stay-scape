import { useListingStore } from "@/store/listingStore";
import {  Plus } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

export default function AddCoverPhoto() {
  const setcoverImage = useListingStore((state) => state.setcoverImage);
  return (
    <>
      <div className="bg-gray-50 h-80 flex items-center justify-center rounded-lg">
        <CldUploadWidget
          uploadPreset="stayScape_uploads"
          options={{
            resourceType: "image",
            clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
            multiple: false,
          }}
          onSuccess={(result) => {
            const info = result.info as { secure_url: string };
            setcoverImage(info.secure_url);
          }}
        >
          {({ open }) => (
            <button type="button" onClick={() => open()}>
              <Plus className="h-8 w-8 text-gray-400"  />
            </button>
          )}
        </CldUploadWidget>
      </div>
    </>
  );
}
