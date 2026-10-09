"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function VirtualListingList() {
  const parentRef = useRef<HTMLDivElement>(null);
  const listings = Array.from({ length: 1000 }, (_, index) => ({
    id: index,
    title: `Listing ${index + 1}`,
  }));
  

  const rowVirtualizer = useVirtualizer({
   count: rows.length,

  getScrollElement: () => parentRef.current,

  estimateSize: () => 400,

  overscan: 2,
  })
console.log(rowVirtualizer.getVirtualItems());
  return (
    <>
      <div ref={parentRef} className="h-125 overflow-auto border">
        <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const listing = listings[virtualItem.index];

          return (
            <div
              key={listing.id}
              className="absolute left-0 top-0 w-full border-b p-4"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {listing.title}
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
