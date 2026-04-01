import { Property } from "@/types";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilters";
import PropertyCard from "@/components/PropertyCard";

// Mock data - In a real app, this would come from an API
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Beachfront Villa",
    description: "Stunning ocean views with private pool",
    price: 350,
    location: {
      address: "123 Ocean Drive",
      city: "Malibu",
      state: "California",
      country: "USA",
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
    ],
    host: {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      createdAt: new Date(),
    },
    amenities: ["WiFi", "Pool", "Kitchen", "Beach access", "Parking"],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    reviewCount: 128,
    propertyType: "entire-place",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    description: "Perfect retreat in the mountains",
    price: 180,
    location: {
      address: "456 Pine Trail",
      city: "Aspen",
      state: "Colorado",
      country: "USA",
    },
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&auto=format&fit=crop",
    ],
    host: {
      id: "2",
      name: "Mike Chen",
      email: "mike@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      createdAt: new Date(),
    },
    amenities: ["WiFi", "Fireplace", "Kitchen", "Mountain view", "Hot tub"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.8,
    reviewCount: 89,
    propertyType: "entire-place",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Downtown Loft",
    description: "Stylish loft in the heart of the city",
    price: 220,
    location: {
      address: "789 Main Street",
      city: "New York",
      state: "New York",
      country: "USA",
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
    ],
    host: {
      id: "3",
      name: "Emma Davis",
      email: "emma@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      createdAt: new Date(),
    },
    amenities: ["WiFi", "Elevator", "Kitchen", "City view", "Workspace"],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.7,
    reviewCount: 56,
    propertyType: "entire-place",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Lakeside Cottage",
    description: "Peaceful getaway by the lake",
    price: 150,
    location: {
      address: "321 Lake Road",
      city: "Lake Tahoe",
      state: "California",
      country: "USA",
    },
    images: [
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&auto=format&fit=crop",
    ],
    host: {
      id: "4",
      name: "James Wilson",
      email: "james@example.com",
      avatar: "https://i.pravatar.cc/150?img=4",
      createdAt: new Date(),
    },
    amenities: ["WiFi", "Lake access", "Kayaks", "Fire pit", "Deck"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.9,
    reviewCount: 142,
    propertyType: "entire-place",
    createdAt: new Date(),
  },
];
export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>

        <div className="container-custom py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 animate-slide-up">
              Find your next{" "}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                adventure
              </span>
            </h1>
            <p
              className="text-xl text-gray-600 mb-12 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Discover unique stays and experiences around the world
            </p>

            {/* Search Component */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="container-custom py-6">
          <CategoryFilter />
        </div>
      </section>
      {/* Property Listings */}
      <section className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-900">
            Explore stays
          </h2>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              Map view
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProperties.map((property, index) => (
            <div key={property.id}  className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}>
               <PropertyCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
