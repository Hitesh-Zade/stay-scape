import React from 'react';
import {cn} from '@/lib/cn';
import { LoaderCircle } from "lucide-react";
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center border justify-center p-3 rounded-lg transition-all not-disabled:cursor-pointer disabled:cursor-not-all disabled:opacity-50   duration-300', {
    variants:{
        variant:{
            primary:"bg-primary hover:bg-primary text-white border-primary",
            secondary:"bg-gray-300 border-none hover:bg-primary text-primary hover:text-white",
            outline:"border-gray-400 border bg-transparent hover:bg-gray-200",
            icon:""
        }
    }
})

 type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    loading?:boolean;
    href?:string;
 }
export function Button({
    variant,
  className,
  children,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({variant}),
        className
      )}
      {...props}

      aria-disabled={props.disabled}
    >
      {children}
     {loading && (
        <LoaderCircle className="h-4 w-4 ml-2 animate-spin" />
      )}
    </button>
  );
}