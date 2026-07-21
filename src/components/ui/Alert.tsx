import { X, AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

type AlertVariant = "error" | "success" | "warning" | "info";

interface AlertProps {
  variant?: AlertVariant;
  message: string;
  onClose?: () => void;
}

const variants = {
  error: {
    classes: "border-red-200 bg-red-50 text-danger",
    icon: <AlertCircle className="h-5 w-5 shrink-0" />,
  },
  success: {
    classes: "border-green-200 bg-green-50 text-green-700",
    icon: <CheckCircle2 className="h-5 w-5 shrink-0" />,
  },
  warning: {
    classes: "border-yellow-200 bg-yellow-50 text-yellow-700",
    icon: <TriangleAlert className="h-5 w-5 shrink-0" />,
  },
  info: {
    classes: "border-blue-200 bg-blue-50 text-blue-700",
    icon: <Info className="h-5 w-5 shrink-0" />,
  },
};

export default function Alert({
  variant = "error",
  message,
  onClose,
}: AlertProps) {
  const style = variants[variant];

  return (
    <div
      className={`mb-4 flex items-start justify-between rounded-lg border px-4 py-3 ${style.classes}`}
    >
      <div className="flex items-start gap-3">
        {style.icon}
        <p className="text-sm">{message}</p>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-4 rounded p-1 transition hover:bg-black/10"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}