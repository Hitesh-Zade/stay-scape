import { useState } from "react";

export function usePasswordValidation() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    if (!value.trim()) {
      setError("Password is required");
      return false;
    }

    if (value.length < 3) {
      setError("Password must be at least 3 characters");
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);
    validate(value);
  };

  const reset = () => {
  setPassword("");
  setError("");
};
  return {
    password,
    error,
    handleChange,
    validate,
    reset
  };
}