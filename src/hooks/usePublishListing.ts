import { useMutation } from "@tanstack/react-query";
import { ListingService } from "@/services/listing.services";

export function usePublishListing(){

  return useMutation({

    mutationFn: ListingService.publish

  });

}