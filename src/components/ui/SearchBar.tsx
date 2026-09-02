"use client";

import { MapPin, Calendar, Users, SearchIcon, Plus, Minus } from "lucide-react";
import { useMemo, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { Button } from "../button/Button";
import { useEffect, useRef } from "react";
import { usePublishedListings } from "@/hooks/usePublishedListings";
import { ListingCardProps } from "@/types/index";
interface Location {
  city: string;
  country: string;
}
interface SearchBarProps {
  searchLocation: Location | null;
  setSearchLocation: (search: Location | null) => void;
}
export default function SearchBar({
  searchLocation,
  setSearchLocation,
}: SearchBarProps) {
  const [activeField, setActiveField] = useState<
    "location" | "dates" | "guests" | null
  >(null);
  const [searchCity, setSearchCity] = useState("");

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    searchLocation,
  );
  const { data, isLoading } = usePublishedListings();

  const locations = useMemo(() => {
    const listings = data?.listings ?? [];

    const uniqueLocations = new Map<
      string,
      {
        city: string;
        country: string;
      }
    >();

    listings.forEach((listing: ListingCardProps) => {
      const city = listing.address?.city?.trim();
      const country = listing.address?.country?.trim();

      if (city && country) {
        const key = `${city.toLowerCase()}-${country.toLowerCase()}`;

        uniqueLocations.set(key, {
          city,
          country,
        });
      }
    });

    return Array.from(uniqueLocations.values());
  }, [data?.listings]);

  const filteredCities = locations.filter((location) => {
    const search = searchCity.toLowerCase();

    return (
      location.city.toLowerCase().includes(search) ||
      location.country.toLowerCase().includes(search)
    );
  });
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const updateGuest = (
    type: "adults" | "children" | "infants",
    value: number,
  ) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(type === "adults" ? 1 : 0, prev[type] + value),
    }));
  };
  const guestDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveField(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (!selectedLocation) {
      return;
    }
    setSearchLocation(selectedLocation);
    console.log("Search location:", selectedLocation);
  };
  return (
    <>
      <div className="bg-white rounded-2xl border shadow-2xl  border-gray-200 p-2 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Location */}
          <div
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              activeField === "location"
                ? "bg-white shadow-md"
                : "hover:bg-white"
            }`}
            onClick={() => setActiveField("location")}
          >
            <label className="block text-xs font-bold text-gray-900 mb-1">
              Where
            </label>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-400" />

              <span className="text-sm text-gray-600 truncate">
                {selectedLocation
                  ? `${selectedLocation.city}`
                  : "Search destinations"}
              </span>
            </div>

            {/* Location Popover */}
            {activeField === "location" && (
              <div
                ref={guestDropdownRef}
                className="absolute left-0 top-full z-50 mt-4 w-80 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Search destinations
                </p>

                {/* Search */}
                <div className="mb-3 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                  <SearchIcon className="h-4 w-4 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search city..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>

                {/* Cities */}
                <div className="max-h-60 overflow-y-auto">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((location) => (
                      <button
                        key={`${location.city}-${location.country}`}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(location);
                          setSearchCity("");
                          setActiveField(null);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                      >
                        <div className="rounded-lg bg-gray-100 p-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                        </div>

                        <div>
                          <p className="font-medium">{location.city}</p>
                          <p className="text-xs text-gray-400">
                            {location.country}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : isLoading ? (
                    <p className="px-3 py-4 text-center text-sm text-gray-500">
                      Loading destinations
                    </p>
                  ) : (
                    <p className="px-3 py-4 text-center text-sm text-gray-500">
                      No destinations found
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              activeField === "dates" ? "bg-white shadow-md" : "hover:bg-white"
            }`}
            onClick={() => setActiveField("dates")}
          >
            <label className="block text-xs font-bold text-gray-900 mb-1">
              When
            </label>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {dateRange?.from && dateRange?.to
                  ? `${dateRange.from.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })} - ${dateRange.to.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}`
                  : "Add dates"}
              </span>
            </div>
            {activeField === "dates" && (
              <div
                ref={guestDropdownRef}
                className="absolute left-0 top-full z-100 w-175 mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Add Dates
                </p>
                <DayPicker
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => {
                    setDateRange(range);

                    // Close after both dates are selected
                    if (range?.from && range?.to) {
                      setActiveField(null);
                    }
                  }}
                  disabled={{ before: new Date() }}
                  min={1}
                  numberOfMonths={2}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div
              className={`relative p-4 rounded-xl w-full cursor-pointer transition-all duration-200 ${
                activeField === "guests"
                  ? "bg-white shadow-md"
                  : "hover:bg-white"
              }`}
              onClick={() => setActiveField("guests")}
            >
              <label className="block text-xs font-bold text-gray-900 mb-1">
                Who
              </label>

              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />

                <span className="w-full text-sm text-gray-600 truncate">
                  Add Guests
                </span>
              </div>

              {/* Location Popover */}
              {activeField === "guests" && (
                <div
                  ref={guestDropdownRef}
                  className="absolute left-0 top-full z-50 mt-4 w-80 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="mb-3 text-sm font-semibold text-gray-900">
                    Add Guests
                  </p>

                  {/* Adults */}
                  <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">
                    <div>
                      <h3 className="text-lg font-medium">Adults</h3>
                      <p className="text-sm text-gray-500">Ages 13 or above</p>
                    </div>

                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("adults", -1)}
                        disabled={guests.adults === 1}
                      >
                        <Minus className="h-4.5 w-4.5" />
                      </Button>

                      <span className="mx-2 w-8 text-center text-lg">
                        {guests.adults}
                      </span>

                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("adults", 1)}
                      >
                        <Plus className="h-4.5 w-4.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">
                    <div>
                      <h3 className="text-lg font-medium">Children</h3>
                      <p className="text-sm text-gray-500">Ages 2–12</p>
                    </div>

                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("children", -1)}
                        disabled={guests.children === 0}
                      >
                        <Minus className="h-4.5 w-4.5" />
                      </Button>

                      <span className="mx-2 w-8 text-center text-lg">
                        {guests.children}
                      </span>

                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("children", 1)}
                      >
                        <Plus className="h-4.5 w-4.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-medium">Infants</h2>
                      <p className="text-sm text-gray-500">Under 2</p>
                    </div>

                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("infants", -1)}
                        disabled={guests.infants === 0}
                      >
                        <Minus className="h-4.5 w-4.5" />
                      </Button>

                      <span className="mx-2 w-8 text-center text-lg">
                        {guests.infants}
                      </span>

                      <Button
                        variant="outline"
                        className="p-2 text-sm border-0 bg-gray-100 rounded-full"
                        onClick={() => updateGuest("infants", 1)}
                      >
                        <Plus className="h-4.5 w-4.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="rounded-xl  p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary text-white"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
