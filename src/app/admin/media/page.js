import MediaUploader from "@/components/admin/MediaUploader";
import DeleteMediaButton from "@/components/admin/DeleteMediaButton";

import {
  getAllFiles,
  getImagePreview,
} from "@/services/storageService";

export default async function MediaPage() {

  const files =
    await getAllFiles();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Media Library
      </h1>

      <MediaUploader />

      <div className="grid md:grid-cols-4 gap-6">

        {files.files.map((file) => (

          <div
            key={file.$id}
            className="border rounded p-2"
          >

            <img
              src={getImagePreview(
                file.$id
              )}
              alt=""
              className="w-full h-40 object-cover"
            />

            <div className="mt-3">

              <p className="text-sm truncate">
                {file.name}
              </p>

              <a
                href={getImagePreview(
                  file.$id
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm block mt-2"
              >
                Open
              </a>

              <DeleteMediaButton
                fileId={file.$id}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}