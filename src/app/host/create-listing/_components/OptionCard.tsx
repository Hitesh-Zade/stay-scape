import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  icon: Icon,
 selected,
  onClick,
}: Props) {
  return (
    <button
    onClick={onClick}
      className={`border rounded-lg p-3 md:p-4 transition flex flex-col items-center justify-center
         ${
        selected
          ? "border-black bg-gray-50 border-2"
          : "border-gray-300 hover:border-gray-600"
      }
        `}
    >
      <Icon className="mb-4" />

      <h3 className="md:text-lg text-medium font-medium">{title}</h3>
    </button>
  );
}

{/* <button
      onClick={onClick}
      className={`border rounded-xl p-5 transition

      ${
        selected
          ? "border-black bg-gray-100"
          : "border-gray-300 hover:border-black"
      }`}
    >
      <Icon className="mb-4" />

      <h3>{title}</h3>
    </button> */}