import Image from "next/image";
import {
  MapPin,
  IndianRupee,
  PencilIcon,
  ClockAlert,
  DeleteIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";

interface ListingCardProps {
  listing: {
    _id: string;
    title: string;
    propertyType: string;
    placeType: string;
    price: number;
    status: "In Progress" | "Published";
    address: {
      city: string;
      state: string;
    };
    coverImage: string;
    images: string[];
  };
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-sm">
      <div className="relative h-48 w-full bg-gray-100">
        {listing.coverImage ? (
          <Image
            src={listing.coverImage}
            alt={listing.title}
            fill
            className="object-cover transition duration-300"
          />
        ) : (
          ""
        )}

        <span
          className={`absolute right-3 top-3 border rounded-full px-3 py-1 text-xs font-semibold  ${
            listing.status === "Published"
              ? "bg-green-100 border-green-500 text-green-500"
              : "bg-yellow-100 border-yellow-500 text-yellow-500"
          }`}
        >
          {listing.status}
        </span>
        <div className="absolute right-3 bottom-2 flex">
            <Link
            href={`/host/create-listing?id=${listing._id}`}
            className="rounded-full bg-white px-2 py-2 text-xs  mr-1  text-red-400 transition hover:bg-red-800 hover:text-white"
          >
            <Trash2Icon className="h-4 w-4" />
          </Link>
          <Link
            href={`/host/create-listing?id=${listing._id}`}
            className="rounded-full bg-white px-2 py-2 text-xs transition hover:bg-gray-800 hover:text-white"
          >
            {listing.status === "In Progress" ? (
              <ClockAlert className="h-4 w-4" />
            ) : (
              <PencilIcon className="h-4 w-4" />
            )}
          </Link>
        
        </div>
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
        <div className="flex items-center justify-between"></div>
      </div>
    </div>
  );
};

export default ListingCard;
