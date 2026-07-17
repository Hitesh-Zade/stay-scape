import { ImageIcon, Trash, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
type PreviewFile = File & {
  preview: string;
};

export default function UploadDropzone() {
  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [imgPreview, setimgPreview] = useState([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (index: number) => {
    setFiles((prev) => {
      // Revoke the object URL to avoid memory leaks
      URL.revokeObjectURL(prev[index].preview);

      return prev.filter((_, i) => i !== index);
    });
  };
  return (
    <>
      {files.length === 0 ? (
        <label
          htmlFor="upload"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-12 transition hover:border-gray-500"
        >
          <ImageIcon size={48} className="mb-5 text-gray-600" />

          <h3 className="text-lg font-semibold">Drag and drop</h3>

          <p className="mt-2 text-gray-500 mb-3">or browse for photos</p>
          <div {...getRootProps({ className: "dropzone" })}>
            <span className="mt-6 rounded-lg bg-black px-7 py-3 font-medium text-white">
              Browse
            </span>
          </div>

          <input {...getInputProps()} />
        </label>
      ) : (
        <aside>
          {files.map((file, index) => (
            <div key={file.name} className="relative">
              <Image
                src={file.preview}
                alt={file.name}
                width="100"
                height="200"
                className="h-50 w-full rounded-lg"
              />
              {/* Delete Button */}
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-500"
              >
                <Trash size={16} />
              </button>
            </div>
          ))}
        </aside>
      )}
    </>
  );
}
