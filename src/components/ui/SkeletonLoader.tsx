const ListingCardSkeleton = () => {
  return (
    <div className="w-full">
      {/* Image skeleton */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200 animate-pulse">
        {/* Wishlist button */}
        <div className="absolute right-3 top-3 h-9 w-9 rounded-full bg-gray-300" />
      </div>

      {/* Content skeleton */}
      <div className="mt-3 space-y-2">
        {/* Location */}
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />

        {/* Property type */}
        <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />

        {/* Price */}
        <div className="mt-2 h-4 w-2/5 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
};

export default ListingCardSkeleton;