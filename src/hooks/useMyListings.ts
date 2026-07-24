import { useQuery } from "@tanstack/react-query";
import { getMyListings } from "@/services/listing.services";

export const useMyListings = () => {
  return useQuery({
    queryKey: ["my-listings"],
    queryFn: getMyListings,
  });
};