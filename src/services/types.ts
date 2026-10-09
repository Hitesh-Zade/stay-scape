export interface Listing {
  _id: string;
  propertyType: string;
  placeType: string;
  category: string;
  address: {
    address: string;
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  basicDetails: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  title: string;
  description: string;
  price: number;
  coverImage: string;
  images: string[];
  amenities: string[];
}