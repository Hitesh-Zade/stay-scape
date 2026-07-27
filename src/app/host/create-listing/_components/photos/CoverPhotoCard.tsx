import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useListingStore } from "@/store/listingStore";

interface PhotoCardProps {
  image: string;
}

export default function PhotoCard({ image }: PhotoCardProps) {
  const setcoverImage = useListingStore((state) => state.setcoverImage);
  const handleDelete = () => {
  setcoverImage("");
  };

  return (
    <div className="group relative h-80 overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="Listing"
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Delete Button */}
      <button
        type="button"
        onClick={handleDelete}
        className="absolute right-3 top-3 rounded-full bg-white p-2 text-red-500 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 hover:bg-red-500 hover:text-white"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}