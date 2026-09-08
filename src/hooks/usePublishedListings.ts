import { useQuery } from "@tanstack/react-query";
import { getPublishedListings } from "@/services/listing.services";

export const usePublishedListings = (city?: string) => {
  return useQuery({
    queryKey: ["published-listings", city],
    queryFn: () => getPublishedListings(city),
  });
};