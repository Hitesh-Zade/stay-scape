import { useQuery } from "@tanstack/react-query";
import { getPublishedListings } from "@/services/listing.services";

export const usePublishedListings = () => {
  return useQuery({
    queryKey: ["published-listings"],
    queryFn: getPublishedListings,
  });
};