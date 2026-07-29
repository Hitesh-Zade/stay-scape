import { useQuery } from "@tanstack/react-query";
import { getListing } from "@/services/listing.services";

export const useEditListing = (id: string) => {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: () => getListing(id),
    enabled: !!id,
  });
};