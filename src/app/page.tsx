"use client";
import { Property } from "@/types";
import SearchBar from "@/components/ui/SearchBar";
import CategoryFilter from "@/components/ui/CategoryFilters";
import Navbar from "@/components/layout/Navbar";
import PublishedListings from "@/components/listings/PublishedListings";
import { useState } from "react";
import VirtualListingList from "@/components/listings/VirtualListingList";
interface Location {
  city: string;
  country: string;
}
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
 const [searchLocation, setSearchLocation] =
  useState<Location | null>(null);

  return (
    <>
      <Navbar />

      <div className="animate-fade-in">
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 ">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>

          <div className="container-custom py-20 md:py-32 relative">
            <div className="max-w-3xl mx-auto">
              <h1 className=" text-center text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 animate-slide-up">
                Find your next{" "}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-white">
                  adventure
                </span>
              </h1>
              <p
                className="text-xl  text-center text-gray-600 mb-12 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Discover unique stays and experiences around the world
              </p>

              {/* Search Component */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <SearchBar
                  searchLocation={searchLocation}
                  setSearchLocation={setSearchLocation}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-gray-200 bg-white sticky top-20 z-40">
          <div className="container-custom py-6">
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </section>
        {/* Property Listings */}
        <section className="container-custom py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Explore stays
            </h2>
          </div>
          <PublishedListings activeCategory={activeCategory}  searchLocation={searchLocation} />
        </section>
      </div>
    </>
  );
}
