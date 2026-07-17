import {
  Home,
  Building2,
  Hotel,
  Tent,
  Trees,
  Castle,
  Warehouse,
  Ship,
  Caravan,
  Mountain,
  Landmark,
  WarehouseIcon,
} from "lucide-react";
import {PropertyType} from "../_types/listings"
export const propertyTypes: PropertyType[] = [
  {
    id: "house",
    title: "House",
    icon: Home,
  },
  {
    id: "apartment",
    title: "Flat / Apartment",
    icon: Building2,
  },
  {
    id: "guest-house",
    title: "Guest House",
    icon: Home,
  },
  {
    id: "hotel",
    title: "Hotel",
    icon: Hotel,
  },
  {
    id: "farm",
    title: "Farm",
    icon: Trees,
  },
  {
    id: "cabin",
    title: "Cabin",
    icon: Warehouse,
  },
  {
    id: "cottage",
    title: "Cottage",
    icon: Home,
  },
  {
    id: "villa",
    title: "Villa",
    icon: Landmark,
  },
  {
    id: "bungalow",
    title: "Bungalow",
    icon: Home,
  },
  {
    id: "tree-house",
    title: "Tree House",
    icon: Trees,
  },
  {
    id: "tent",
    title: "Tent",
    icon: Tent,
  },
  {
    id: "boat",
    title: "Boat",
    icon: Ship,
  },
  {
    id: "camper",
    title: "Camper / RV",
    icon: Caravan,
  },
  {
    id: "castle",
    title: "Castle",
    icon: Castle,
  },
  {
    id: "barn",
    title: "Barn",
    icon: WarehouseIcon,
  },
  {
    id: "dome",
    title: "Dome",
    icon: Mountain,
  },
];