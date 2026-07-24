import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

export interface TitleStepRef {
  validate: () => boolean;
}

const TitleStep = forwardRef<TitleStepRef>((_, ref) => {
  const title = useListingStore((state) => state.title);
  const setTitle = useListingStore((state) => state.setTitle);

  const description = useListingStore((state) => state.description);
  const setDescription = useListingStore(
    (state) => state.setDescription
  );

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  useImperativeHandle(ref, () => ({
    validate() {
      const validationErrors = {
        title: "",
        description: "",
      };

      if (!title.trim()) {
        validationErrors.title = "Title is required";
      }

      if (!description.trim()) {
        validationErrors.description =
          "Description is required";
      }

      setErrors(validationErrors);

      return (
        !validationErrors.title &&
        !validationErrors.description
      );
    },
  }));

  return (
    <>
      <StepHeader
        title="Create your listing"
        subtitle="Give your place a catchy title and detailed description."
      />

      <div>
        <Input
          id="title"
          label="Title"
          placeholder="Enter your Title"
          value={title}
          error={errors.title}
          onChange={(e) => {
            setTitle(e.target.value);

            if (errors.title) {
              setErrors((prev) => ({
                ...prev,
                title: "",
              }));
            }
          }}
        />

        <br />

        <label
          htmlFor="description"
          className="mb-2 block text-lg font-semibold text-gray-700"
        >
          Description
        </label>

        <textarea
          id="description"
          rows={10}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);

            if (errors.description) {
              setErrors((prev) => ({
                ...prev,
                description: "",
              }));
            }
          }}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-danger">
            {errors.description}
          </p>
        )}
      </div>
    </>
  );
});

TitleStep.displayName = "TitleStep";

export default TitleStep;