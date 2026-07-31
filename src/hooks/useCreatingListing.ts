
import { useMutation } from "@tanstack/react-query";
import { ListingService } from "@/services/listing.services";



export function useCreateDraft(){
    return useMutation({
        mutationFn: ListingService.createDraft,
    })
}
