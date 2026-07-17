"use client"
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="relative  left-0 z-50 h-1 w-full bg-gray-200">
      <div
        className="h-full bg-gray-900 transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}