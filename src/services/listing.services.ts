import { Listing } from "./types";

export const ListingService = {

    async createDraft() {
        
        const res = await fetch("/api/listings", {
            method: "POST"
        });

        return res.json();
    },

    async updateDraft(id: string, data: Listing) {

        const res = await fetch(`/api/listings/${id}`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        return res.json();
    },
    async publish(id: string) {

        const res = await fetch(`/api/listings/${id}`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                status: "published"
            })

        });

        return res.json();
    }
}

export const getMyListings = async () => {
  const response = await fetch("/api/listings");

  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }

  return response.json();
};

export const getListing = async (id: string) => {
  const response = await fetch(`/api/listings/${id}`);

  return response.json();
};

export const getPublishedListings = async (city?: string) => {
  const params = new URLSearchParams();

  if (city) {
    params.set("city", city);
  }

  const query = params.toString();
  const url = query
    ? `/api/get-listings/?${query}`
    : `/api/get-listings/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }

  return response.json();
};