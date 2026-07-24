import type { BasicDetails } from "@/store/listingStore";

export interface BasicDetailsType {
  id: number;
  title: string;
  key: keyof BasicDetails;
}
export const basicTypes: BasicDetailsType[] = [
  {
    id: 1,
    title: "Guests",
    key: "guests",
  },
  {
    id: 2,
    title: "Bedroom",
    key: "bedrooms",
  },
  {
    id: 3,
    title: "Beds",
    key: "beds",
  },
  {
    id: 4,
    title: "Bathroom",
    key: "bathrooms",
  },
];