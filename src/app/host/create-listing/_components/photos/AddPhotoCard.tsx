import { Image } from "lucide-react";
import UploadPhotoModal from "./UploadPhotoModal";
import { useState } from "react";

export default function AddPhotoCard() {
      const [open, setOpen] = useState(false);

  return <>
     <div onClick={() => setOpen(true)} className="bg-gray-50 h-40 flex items-center justify-center rounded-lg">
       <Image className="h-8 w-8 text-gray-400"/>
     </div>
    <UploadPhotoModal
        open={open}
        onClose={() => setOpen(false)}
      />
  </>;
}
