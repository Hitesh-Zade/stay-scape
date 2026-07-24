interface StepHeaderProps {
  title: string;
  subtitle?: string;
}

export default function StepHeader({
  title,
  subtitle,
}: StepHeaderProps) {
  return (
    <div className="mb-12 mt-5">
      <h1 className="lg:text-2xl text-lg md:text-xl  font-semibold text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 md:text-[16px] text-sm  text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}