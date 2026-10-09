import { Suspense } from "react";
import CreateListingsContent from "./CreateListingsContent";

export default function CreateListings() {
  return (
    <Suspense fallback={<div>Loading listing form...</div>}>
      <CreateListingsContent />
    </Suspense>
  );
}