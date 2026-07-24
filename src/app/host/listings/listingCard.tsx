import Image from "next/image";
import { MapPin, IndianRupee } from "lucide-react";
import Link from "next/link";

interface ListingCardProps {
  listing: {
    _id: string;
    title: string;
    propertyType: string;
    placeType: string;
    price: number;
    status: "draft" | "published";
    address: {
      city: string;
      state: string;
    };
    images: string[];
  };
}

const ListingCard = ({ listing }: ListingCardProps) => {
    
  return (
    <Link
      href={`/host/listings/${listing._id}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-sm"
    >
      <div className="relative h-66 w-full bg-gray-100">
        <Image
          src={listing.images?.[0] || "/images/placeholder.jpg"}
          alt={listing.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute right-3 top-3 border rounded-full px-3 py-1 text-xs font-semibold  ${
            listing.status === "published"
              ? "bg-green-100 border-green-500 text-green-500"
              : "bg-yellow-100 border-yellow-500 text-yellow-500"
          }`}
        >
          {listing.status}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">
            {listing.title || "Untitled Listing"}
          </h3>

          <p className="text-sm text-gray-500">
            {listing.propertyType} • {listing.placeType}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          <span>
            {listing.address.city}, {listing.address.state}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="flex items-center font-semibold">
            <IndianRupee size={16} />
            {listing.price}
            <span className="ml-1 text-sm font-normal text-gray-500">
              / night
            </span>
          </p>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            {listing.status === "draft" ? "Continue" : "Edit"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;