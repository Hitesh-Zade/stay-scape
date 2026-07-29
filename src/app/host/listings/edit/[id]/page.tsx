"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useListing } from "@/hooks/useEditListing";
import { useListingStore } from "@/store/listingStore";

export default function EditListingPage() {
  const { id } = useParams();

  const { data, isLoading } = useListing(id as string);

  const setListing = useListingStore((state) => state.setListing);

  useEffect(() => {
    if (data?.listing) {
      setListing(data.listing);
    }
  }, [data, setListing]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <CreateListing />;
}