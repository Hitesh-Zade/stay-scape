import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-1 block text-md font-semibold text-gray-700"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={`
            w-full rounded-lg border-2 border-gray-300
            px-4 py-2.5
            text-gray-900
            placeholder:text-gray-400
            outline-none
            transition-all duration-200
            focus:border-gray-700
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:text-gray-500
            ${error ? "border-danger focus:border-danger focus:ring-danger" : ""}
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="mt-1 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;