import { LucideIcon } from "lucide-react";

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
  count: number;
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