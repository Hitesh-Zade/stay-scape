"use client";

import { cn } from "@/lib/cn";
import { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export default function AmenityCard({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: AmenityCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-[130px] w-full flex-col rounded-xl border p-5 text-left transition-all items-start justify-between duration-200",
        "hover:border-black",
        selected
          ? "border-black bg-neutral-100"
          : "border-neutral-300 bg-white"
      )}
    >
      <Icon size={30} className="mb-6" />

      <h3 className="font-normal text-lg">
        {title}
      </h3>

      {description && (
        <p className="mt-1 text-sm text-neutral-500">
          {description}
        </p>
      )}
    </button>
  );
}