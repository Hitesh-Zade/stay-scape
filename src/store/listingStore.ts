import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface ListingState {
  currentStep: number;

  propertyType: string;
  placeType: string;

  address: Address;

  title: string;
  description: string;

  price: number;

  images: File[];

  amenities: string[];

  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;

  setPropertyType: (type: string) => void;
  setPlaceType: (type: string) => void;

  updateAddress: (address: Partial<Address>) => void;

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: number) => void;

  setImages: (images: File[]) => void;

  addAmenity: (amenity: string) => void;
  removeAmenity: (amenity: string) => void;

  resetListing: () => void;
}

export const useListingStore = create<ListingState>()(
  persist(
    (set) => ({
      currentStep: 1,

      propertyType: "",
      placeType: "",

      address: {
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      },

      title: "",
      description: "",

      price: 0,

      images: [],

      amenities: [],

      setCurrentStep: (step) =>
        set({ currentStep: step }),

      nextStep: () =>
        set((state) => ({
          currentStep: state.currentStep + 1,
        })),

      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(1, state.currentStep - 1),
        })),

      setPropertyType: (type) =>
        set({ propertyType: type }),

      setPlaceType: (type) =>
        set({ placeType: type }),

      updateAddress: (address) =>
        set((state) => ({
          address: {
            ...state.address,
            ...address,
          },
        })),

      setTitle: (title) =>
        set({ title }),

      setDescription: (description) =>
        set({ description }),

      setPrice: (price) =>
        set({ price }),

      setImages: (images) =>
        set({ images }),

      addAmenity: (amenity) =>
        set((state) => ({
          amenities: [...state.amenities, amenity],
        })),

      removeAmenity: (amenity) =>
        set((state) => ({
          amenities: state.amenities.filter(
            (item) => item !== amenity
          ),
        })),

      resetListing: () =>
        set({
          currentStep: 1,
          propertyType: "",
          placeType: "",
          address: {
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
          },
          title: "",
          description: "",
          price: 0,
          images: [],
          amenities: [],
        }),
    }),
    {
      name: "listing-store",
    }
  )
);