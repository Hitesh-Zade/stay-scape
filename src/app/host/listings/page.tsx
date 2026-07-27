"use client";

import HostNavbar from "@/components/layout/HostNavbar";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button/Button";
import { useMyListings } from "@/hooks/useMyListings";
import ListingCard from "./listingCard";

export default function Listings() {
  const { data, isLoading } = useMyListings();
  const listings = data?.listings ?? [];
  console.log(listings.coverImage)
  return (
    <>
      <HostNavbar />
      <div className="container-custom py-4 mx-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-display">
            Your Listing
          </h1>
          <div>
            <Link href="/host/create-listing">
              <Button className="mb-0" variant="primary" title="Add Listings">
                <Plus className="h-4 w-4" />
                Create Listing
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
