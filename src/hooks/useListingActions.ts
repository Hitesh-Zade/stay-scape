import { useListingStore } from "@/store/listingStore";
import { useCreateDraft } from "./useCreatingListing";
import { useUpdateDraft } from "./useUpdateListing";
import { usePublishListing } from "./usePublishListing";
import { useRouter } from "next/navigation";

export const useListingActions = () => {
    const store = useListingStore();
    const router = useRouter();
    const createMutation = useCreateDraft();
    const updateMutation = useUpdateDraft();
    const publishMutation = usePublishListing();

    const saveCurrentStep = async () => {
        switch (store.currentStep) {
            case 1:
                const { listing } = await createMutation.mutateAsync();
                store.setListingId(listing._id);
                break;
            case 2:
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                         listingId: store.listingId,
                        propertyType: store.propertyType,
                        placeType: store.placeType,
                    },
                });
                break;

            case 3:
                
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                        address: store.address,
                    },
                });
                break;
            case 4:
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                        basicDetails: store.basicDetails,
                    },
                });
                break;
            case 5:
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                        amenities: store.amenities,
                    },
                });
                break;
            case 6:
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                        title: store.title,
                        description: store.description,
                    },
                });
                break;
            case 7:
                await updateMutation.mutateAsync({
                    id: store.listingId,
                    data: {
                        price: store.price,
                    },
                });
                break;
            // ...other steps
        }
    };

    const publishListing = async () => {
        await publishMutation.mutateAsync(store.listingId);
    };

    const TOTAL_STEPS = 8;

    const handleStep = async () => {
        await saveCurrentStep();

        if (store.currentStep === TOTAL_STEPS) {
            await publishMutation.mutateAsync(store.listingId);
            router.replace("listings");
            store.resetListing();
            localStorage.removeItem("listing-store")
        }
    };

     const saveAndExit = async () => {
  await saveCurrentStep();

  store.resetListing();

  router.push("listings");
};

    return { saveCurrentStep, publishListing, handleStep,saveAndExit };
};