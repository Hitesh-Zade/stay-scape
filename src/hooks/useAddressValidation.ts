import { Address } from "@/store/listingStore";

export const validateAddress = (address: Address) => {
  const errors: Partial<Record<keyof Address, string>> = {};

  if (!address.address.trim()) {
    errors.address = "Address is required";
  }

  if (!address.street.trim()) {
    errors.street = "Street is required";
  }

  if (!address.city.trim()) {
    errors.city = "City is required";
  }

  if (!address.state.trim()) {
    errors.state = "State is required";
  }

  if (!address.country.trim()) {
    errors.country = "Country is required";
  }

  if (!address.pincode.trim()) {
    errors.pincode = "Pincode is required";
  }

  return errors;
};