"use client";

import PropertyListingCard from "@/components/listings/PropertyListingCard";
import { usePublishedListings } from "@/hooks/usePublishedListings";
import { useEffect, useMemo } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useGridColumns } from "@/hooks/useGridColumns";
import ListingCardSkeleton from "../ui/SkeletonLoader";
import { ListingCardProps } from "@/types";

interface Location {
  city: string;
  country: string;
}
interface PublishedListingsProps {
  activeCategory: string;
  searchLocation: Location | null;
}

export default function PublishedListings({
  activeCategory,
  searchLocation,
}: PublishedListingsProps) {
  const { data, isLoading, isError } = usePublishedListings();

  const columns = useGridColumns({
    base: 1,
    sm: 2,
    md: 4,
    lg: 5,
  });

  const filteredListings = useMemo(() => {
    const listings = data?.listings ?? [];
    console.log(listings)

    return listings.filter((listing: ListingCardProps) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" ||
        listing.propertyType?.toLowerCase() === activeCategory.toLowerCase();

      // Location filter
      const matchesLocation =
        !searchLocation ||
        (listing.address?.city?.toLowerCase() ===
          searchLocation.city.toLowerCase() &&
          listing.address?.country?.toLowerCase() ===
            searchLocation.country.toLowerCase());

      return matchesCategory && matchesLocation;
    });
  }, [data?.listings, activeCategory, searchLocation]);

  const rows = useMemo(() => {
    const result = [];

    for (let i = 0; i < filteredListings.length; i += columns) {
      result.push(filteredListings.slice(i, i + columns));
    }

    return result;
  }, [filteredListings, columns]);

  const rowVirtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => 300,

    getItemKey: (index) => {
      return rows[index].map((listing: ListingCardProps) => listing._id).join("-");
    },

    overscan: 2,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeCategory]);

  if (isLoading) {
    return (
      <div
        className="
        grid
        grid-cols-1
        gap-x-6
        gap-y-8
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
      "
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ListingCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Unable to load listings.</p>;
  }
  if (filteredListings.length === 0) {
    return <p className="text-gray-500">No listings available.</p>;
  }

  return (
    <div
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        position: "relative",
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = rows[virtualRow.index];

        return (
          <div
            key={virtualRow.key}
            ref={(element) => {
              if (element) {
                requestAnimationFrame(() => {
                  rowVirtualizer.measureElement(element);
                });
              }
            }}
            data-index={virtualRow.index}
            className="absolute left-0 top-0 grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {row.map((listing:ListingCardProps) => (
              <PropertyListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
