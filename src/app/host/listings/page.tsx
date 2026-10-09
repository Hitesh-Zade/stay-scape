"use client";

import HostNavbar from "@/components/layout/HostNavbar";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button/Button";
import { useMyListings } from "@/hooks/useMyListings";
import ListingCard from "./listingCard";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useGridColumns } from "@/hooks/useGridColumns";
import { useMemo } from "react";
import ListingCardSkeleton from "@/components/ui/SkeletonLoader";
import { ListingCardProps } from "@/types";

export default function Listings() {
  const { data, isLoading, isError } = useMyListings();

  const columns = useGridColumns({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
  });

  const filteredListings = useMemo(() => {
    const listings = data?.listings ?? [];
    return listings;
  }, [data?.listings]);

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
      return rows[index]
        .map((listing: ListingCardProps) => listing._id)
        .join("-");
    },
    overscan: 2,
  });

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
          {isLoading ? (
            <div
              className="
        grid
        grid-cols-1
        gap-x-6
        gap-y-8
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <ListingCardSkeleton key={index} />
              ))}
            </div>
          ) : isError ? (
            <p className="text-gray-500">Unable to load listings.</p>
          ) : filteredListings.length === 0 ? (
            <p className="text-gray-500">No listings available.</p>
          ) : (
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
                    className="absolute left-0 top-0 grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    {row.map((listing: ListingCardProps) => (
                      <ListingCard key={listing._id} listing={listing} />
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
