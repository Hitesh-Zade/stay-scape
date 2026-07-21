import Input from "@/components/common/Input";
import StepHeader from "./StepHeader";
import { useListingStore } from "@/store/listingStore";

export default function TitleStep() {
  const title = useListingStore((state) => state.title);
  const setTitle = useListingStore((state) => state.setTitle);
  const description = useListingStore((state) => state.description);
  const setDescription = useListingStore((state) => state.setDescription);
  return (
    <>
      <StepHeader
        title="Create your listing"
        subtitle="Give your place a catchy title and detailed description."
      />
      <div>
        <Input
          id="Title"
          label="Title"
          placeholder="Enter your Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <br />
        <label
          htmlFor="Description"
          className="mb-2 block text-lg font-semibold text-gray-700"
        >
          Description
        </label>
        <textarea
          rows={10}
          name="Description"
          id="Description"
          placeholder="Enter your Description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          className="w-full rounded-lg border-2 border-gray-300
            px-4 py-2.5
            text-gray-900
            placeholder:text-gray-400
            outline-none
            transition-all duration-200
            focus:border-gray-700
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:text-gray-500"
        ></textarea>
      </div>
    </>
  );
}
