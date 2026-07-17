import AddPhotoCard from "./AddPhotoCard";

export default function PhotoGallery() {
  return (
    <>
      <div className="space-y-4">
        <div>
          <AddPhotoCard />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2">
          <AddPhotoCard />
          <AddPhotoCard />
          <AddPhotoCard />
          <AddPhotoCard />
        </div>
      </div>
    </>
  );
}
