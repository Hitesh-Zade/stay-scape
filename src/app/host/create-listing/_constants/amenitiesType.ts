import {
  Snowflake,
  Bath,
  Refrigerator,
  Thermometer,
  Waves,
  CookingPot,
  Tv,
  WashingMachine,
  Wifi,
  Coffee,
  UtensilsCrossed,
  Shirt,
  SoapDispenserDroplet,
  Bed,
  BriefcaseBusiness,
  Dumbbell,
  Flame,
  WavesLadder,
  House,
  AlarmSmoke,
  ShieldAlert,
  CircleParking,
  BatteryCharging,
  Armchair,
} from "lucide-react";
import {  AmenityCategory } from "../_types/listings";

export const amenities: AmenityCategory[] = [
  {
    id: "basics",
    title: "Basics",
    amenities: [
      {
        id: "air-conditioning",
        title: "Air conditioning",
        icon: Snowflake,
      },
      {
        id: "essentials",
        title: "Essentials",
        description: "Towels, bed sheets, soap and toilet paper",
        icon: Bath,
      },
      {
        id: "fridge",
        title: "Fridge",
        icon: Refrigerator,
      },
      {
        id: "heating",
        title: "Heating",
        icon: Thermometer,
      },
      {
        id: "hot-water",
        title: "Hot water",
        icon: Waves,
      },
      {
        id: "kitchen",
        title: "Kitchen",
        icon: CookingPot,
      },
      {
        id: "tv",
        title: "TV",
        icon: Tv,
      },
      {
        id: "dryer",
        title: "Tumble dryer",
        icon: WashingMachine,
      },
      {
        id: "washing-machine",
        title: "Washing machine",
        icon: WashingMachine,
      },
      {
        id: "wifi",
        title: "Wifi",
        icon: Wifi,
      },
    ],
  },

  {
    id: "popular",
    title: "Popular",
    amenities: [
      {
        id: "coffee-maker",
        title: "Coffee maker",
        icon: Coffee,
      },
      {
        id: "cooking-basics",
        title: "Cooking basics",
        description: "Pots and pans, oil, salt and pepper",
        icon: UtensilsCrossed,
      },
      {
        id: "hairdryer",
        title: "Hairdryer",
        icon: UtensilsCrossed,
      },
      {
        id: "hangers",
        title: "Hangers",
        icon: UtensilsCrossed,
      },
      {
        id: "iron",
        title: "Iron",
        icon: Shirt,
      },
      {
        id: "shampoo",
        title: "Shampoo",
        icon: SoapDispenserDroplet,
      },
    ],
  },

  {
    id: "features",
    title: "Features",
    amenities: [
      {
        id: "cot",
        title: "Cot",
        icon: Bed,
      },
      {
        id: "workspace",
        title: "Dedicated workspace",
        icon: BriefcaseBusiness,
      },
      {
        id: "ev-charger",
        title: "EV charger",
        icon: BatteryCharging,
      },
      {
        id: "parking",
        title: "Free parking on premises",
        icon: CircleParking,
      },
      {
        id: "gym",
        title: "Gym",
        icon: Dumbbell,
      },
      {
        id: "hot-tub",
        title: "Hot tub",
        icon: Bath,
      },
      {
        id: "fireplace",
        title: "Indoor fireplace",
        icon: Flame,
      },
      {
        id: "outdoor-furniture",
        title: "Outdoor furniture",
        icon: Armchair,
      },
      {
        id: "pool",
        title: "Pool",
        icon: WavesLadder,
      },
    ],
  },

  {
    id: "location",
    title: "Location",
    amenities: [
      {
        id: "beach-access",
        title: "Beach access",
        icon: House,
      },
      {
        id: "waterfront",
        title: "Waterfront",
        icon: House,
      },
    ],
  },

  {
    id: "safety",
    title: "Safety",
    amenities: [
      {
        id: "carbon-monoxide-alarm",
        title: "Carbon monoxide alarm",
        icon: ShieldAlert,
      },
      {
        id: "smoke-alarm",
        title: "Smoke alarm",
        icon: AlarmSmoke,
      },
    ],
  },
];