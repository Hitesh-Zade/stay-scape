import { LucideIcon } from "lucide-react";
import type { BasicDetails } from "@/store/listingStore";

export interface PropertyType {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface PlaceType {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface BasicDetailsType {
  id: number;
  title: string;
  key: keyof BasicDetails;
}

export interface Amenity {
  id: string;
  title: string;
  description?: string;
  icon: React.ElementType;
}

export interface AmenityCategory {
  id: string;
  title: string;
  amenities: Amenity[];
}

export interface ListingPhoto {
    id: string;
    url: string;
    isCover: boolean;
}

export interface Address {
  address: string;
  street: string;
  city: string;
  pin: string;
  state: string;
  country: string;
}