import React from 'react';
import {cn} from '@/lib/cn';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center border justify-center p-3 rounded-lg transition-all  duration-300', {
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({variant}),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}