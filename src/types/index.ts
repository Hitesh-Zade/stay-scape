// User Types
export interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  bio?: string;
  phone?: string;
}
// Property Types
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: Location;
  images: string[];
  host: User;
  amenities: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  rating?: number;
  reviewCount?: number;
  propertyType: PropertyType;
  createdAt: Date;
}


export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}


export type PropertyType =
  | 'entire-place'
  | 'private-room'
  | 'shared-room';


export interface ListingCardProps {
  _id: string;
  title: string;
  propertyType: string;
  placeType: string;
  price: number;
  status: "In Progress" | "Published";
  address: {
    city: string;
    state: string;
    country: string;
  };
  basicDetails: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  coverImage: string;
  images: string[];
}
