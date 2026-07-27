import { placeTypes } from "@/app/host/create-listing/_constants/placeTypes";
import { propertyTypes } from "@/app/host/create-listing/_constants/propertyTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Address {
  address: string;
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
export interface BasicDetails {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface ListingState {
  listingId: string;
  currentStep: number;

  propertyType: string;
  placeType: string;

  address: Address;
  basicDetails: BasicDetails;

  title: string;
  description: string;

  price: number;

  coverImage: string;
  images: string[];

  amenities: string[];

  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;

  setPropertyType: (type: string) => void;
  setPlaceType: (type: string) => void;

  setListingId: (listing: undefined) => void;
  updateAddress: (address: Partial<Address>) => void;
  updateBasicDetails: (basicDetails: Partial<BasicDetails>) => void;

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: number) => void;
   setcoverImage: (coverImage: string) => void;
  setImages: (images: string[]) => void;

  addAmenity: (amenity: string) => void;
  removeAmenity: (amenity: string) => void;

  resetListing: () => void;
}

export const useListingStore = create<ListingState>()(
  persist(
    (set) => ({
      listingId: "",
      currentStep: 1,

      propertyType: propertyTypes[0].title,
      placeType: placeTypes[0].title,

      address: {
        address: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
      },

      basicDetails: {
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
      },

      title: "",
      description: "",

      price: 0,

      coverImage: "",
      images: [],

      amenities: [],
      setListingId: (id) =>
        set({
          listingId: id,
        }),
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
      updateBasicDetails: (data) =>
        set((state) => ({
          basicDetails: {
            ...state.basicDetails,
            ...data,
          },
        })),

      setTitle: (title) =>
        set({ title }),

      setDescription: (description) =>
        set({ description }),

      setPrice: (price) =>
        set({ price }),

      setcoverImage: (coverImage) =>
        set({ coverImage }),

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
          propertyType: propertyTypes[0].title,
          placeType: placeTypes[0].title,
          address: {
            address: "",
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
          },
          basicDetails: {
            guests: 4,
            bedrooms: 2,
            beds: 2,
            bathrooms: 2,
          },
          title: "",
          description: "",
          price: 0,
          coverImage: "",
          images: [],
          amenities: [],
        }),
    }),
    {
      name: "listing-store",
    }
  )
);