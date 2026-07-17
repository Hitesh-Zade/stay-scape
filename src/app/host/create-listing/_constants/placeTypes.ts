import { PlaceType } from "../_types/listings";
import {
  Home,
  Building2,
} from "lucide-react";
export const placeTypes : PlaceType[] = [
     {
    id: "EntirePlace",
    title: "An Entire Place",
    desc: "Guests have the whole place to themselves.",
    icon: Home,
  },
  {
    id: "Room",
    title: "A Room",
     desc: "Guests have their own room in a home, plus access to shared spaces.",
    icon: Building2,
  },
  {
    id: "SharedRoom",
    title: "A Shared Room",
    desc: "Guests sleep in a shared room in a professionally managed hostel with staff on-site 24/7.",
    icon: Home,
  },
]