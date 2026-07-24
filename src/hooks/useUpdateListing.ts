import { useMutation } from "@tanstack/react-query";
import { ListingService } from "@/services/listing.services";

export function useUpdateDraft() {

  return useMutation({

    mutationFn: ({
      id,
      data
    }: {
      id:string;
      data:any;
    })=>ListingService.updateDraft(id,data)

  });

}