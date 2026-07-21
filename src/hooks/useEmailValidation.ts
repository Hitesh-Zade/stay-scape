import { useState } from "react";
export function useEmailValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);

    if (!value) {
      setError("Email is required");
    } else if (!isValidEmail(value)) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  const reset = () => {
  setEmail("");
  setError("");
};

  return {
    email,
    error,
    handleChange,
    isValidEmail,
    reset
  };
}