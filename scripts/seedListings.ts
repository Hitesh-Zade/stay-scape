import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import Listing from "@/models/Listing";
import User from "@/models/user";

const propertyTypes = [
  "Guest House",
  "Hotel",
  "Farm",
  "Cottage",
  "Bungalow",
  "Tree House",
  "Tent",
  "Boat",
  "Castle",
  "Dome",
];

const placeTypes = [
  "An Entire place",
  "A room",
  "A Shared room",
];

const cities = [
  {
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380001",
  },
  {
    city: "Surat",
    state: "Gujarat",
    pincode: "395003",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226001",
  },
  {
    city: "Chandigarh",
    state: "Chandigarh",
    pincode: "160001",
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452001",
  },
  {
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: "462001",
  },
  {
    city: "Kochi",
    state: "Kerala",
    pincode: "682001",
  },
  {
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641001",
  },
  {
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751001",
  },
  {
    city: "Patna",
    state: "Bihar",
    pincode: "800001",
  },
  {
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "834001",
  },
  {
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
  },
  {
    city: "Amritsar",
    state: "Punjab",
    pincode: "143001",
  },
  {
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221001",
  },
  {
    city: "Agra",
    state: "Uttar Pradesh",
    pincode: "282001",
  },
  {
    city: "Mysore",
    state: "Karnataka",
    pincode: "570001",
  },
  {
    city: "Udaipur",
    state: "Rajasthan",
    pincode: "313001",
  },
  {
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342001",
  },
  {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530001",
  },
  {
    city: "Thiruvananthapuram",
    state: "Kerala",
    pincode: "695001",
  },
  {
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422001",
  },
  {
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390001",
  },
  {
    city: "Rajkot",
    state: "Gujarat",
    pincode: "360001",
  },
];
const amenitiesList = [
  // Basics
  "Air conditioning",
  "Essentials",
  "Fridge",
  "Heating",
  "Hot water",
  "Kitchen",
  "TV",
  "Tumble dryer",
  "Washing machine",
  "Wifi",

  // Popular
  "Coffee maker",
  "Cooking basics",
  "Hairdryer",
  "Hangers",
  "Iron",
  "Shampoo",

  // Features
  "Cot",
  "Dedicated workspace",
  "EV charger",
  "Free parking on premises",
  "Gym",
  "Hot tub",
  "Indoor fireplace",
  "Outdoor furniture",
  "Pool",

  // Location
  "Beach access",
  "Waterfront",

  // Safety
  "Carbon monoxide alarm",
  "Smoke alarm",
];

const imagesByPropertyType: Record<string, string[]> = {
  "Guest House": [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  ],

  Hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
  ],

  Farm: [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    "https://images.unsplash.com/photo-1500076656116-558758c991c1",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  ],

  Cottage: [
    "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
  ],

  Bungalow: [
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  ],

  "Tree House": [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    "https://images.unsplash.com/photo-1520984032042-162d526883e0",
    "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
  ],

  Tent: [
    "https://images.unsplash.com/photo-1478827536114-da961b7c8d8b",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
  ],

  Boat: [
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "https://images.unsplash.com/photo-1498623116890-37e912163d5d",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  ],

  Castle: [
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c35a",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
  ],

  Dome: [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    "https://images.unsplash.com/photo-1520984032042-162d526883e0",
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f4",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
  ],
};

const randomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomAmenities = () => {
  return [...amenitiesList]
    .sort(() => Math.random() - 0.5)
    .slice(0, randomNumber(4, 8));
};
const getRandomImages = (
  propertyType: string,
  count = 3
) => {
  const availableImages =
    imagesByPropertyType[propertyType] ?? [];

  return [...availableImages]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};
const generateListing = (
  hostId: mongoose.Types.ObjectId,
  userIndex: number,
  listingIndex: number
) => {
  const location = randomItem(cities);
  const propertyType = randomItem(propertyTypes);

// const propertyImages =
//   imagesByPropertyType[propertyType] ?? [];

const listingImages = getRandomImages(propertyType, 3);

  return {
    hostId,

    listingId: `USER-${userIndex + 1}-LISTING-${listingIndex + 1}`,

    propertyType,

    placeType: randomItem(placeTypes),

    address: {
      address: `${randomNumber(1, 999)} Main Street`,
      street: "Main Street",
      city: location.city,
      state: location.state,
      country: "India",
      pincode: location.pincode,
    },

    basicDetails: {
      guests: randomNumber(2, 10),
      bedrooms: randomNumber(1, 5),
      beds: randomNumber(1, 6),
      bathrooms: randomNumber(1, 4),
    },

    amenities: randomAmenities(),

    coverImage: listingImages[0],

    images: listingImages,

    title: `${propertyType} in ${location.city} #${listingIndex + 1}`,

    description:
      "A beautiful and comfortable place to stay with modern amenities and a great location. Perfect for families, couples and business travelers.",

    price: randomNumber(1000, 15000),

    status: "Published",
  };
};

const seedListings = async () => {
  try {
    await connectDB();

    // Get 10 users
    const users = await User.find().limit(10);

    if (users.length < 10) {
      throw new Error(
        `Only ${users.length} users found. You need at least 10 users.`
      );
    }

    console.log(`Found ${users.length} users`);

    const listings = [];

    // 200 listings for each user
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
      const user = users[userIndex];

      for (let listingIndex = 0; listingIndex < 100; listingIndex++) {
        listings.push(
          generateListing(
            user._id,
            userIndex,
            listingIndex
          )
        );
      }
    }

    console.log(`Preparing ${listings.length} listings...`);

    await Listing.insertMany(listings);

    console.log(
      `✅ Successfully inserted ${listings.length} listings`
    );

    // Show distribution
    for (let i = 0; i < users.length; i++) {
      const count = await Listing.countDocuments({
        hostId: users[i]._id,
      });

      console.log(
        `User ${i + 1} (${users[i]._id}): ${count} listings`
      );
    }

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedListings();