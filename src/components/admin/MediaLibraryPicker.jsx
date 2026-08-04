"use client";

import { useEffect, useMemo, useState } from "react";
import { getAllFiles, getImagePreview, uploadImage } from "@/services/storageService";

export default function MediaLibraryPicker({
  value = "",
  onChange,
  label = "Image",
  altValue = "",
  onAltChange,
  titleValue = "",
  onTitleChange,
  allowRemove = true,
  modal = false,
  triggerLabel = "Select image",
}) {
  const [activeTab, setActiveTab] = useState("library");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const previewUrl = useMemo(() => {
    if (!selectedFileId) return "";

    if (typeof selectedFileId === "string" && /^https?:\/\//.test(selectedFileId)) {
      return selectedFileId;
    }

    return getImagePreview(selectedFileId);
  }, [selectedFileId]);

  useEffect(() => {
    let active = true;

    const loadFiles = async () => {
      try {
        const response = await getAllFiles();
        if (active) {
          setFiles(response?.files || response?.documents || []);
        }
      } catch (error) {
        console.error("Load media library error:", error);
        if (active) {
          setFiles([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadFiles();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (value) {
      setSelectedFileId(value);
    } else {
      setSelectedFileId("");
    }
  }, [value]);

  const handleUpload = async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploaded = await uploadImage(file);
      setFiles((prev) => [uploaded, ...prev]);
      setSelectedFileId(uploaded.$id);
      onChange?.(uploaded.$id);
      setActiveTab("library");
    } catch (error) {
      alert(error?.message || "Upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const handleRemove = () => {
    setSelectedFileId("");
    onChange?.("");
  };

  const pickerContent = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">{label}</p>
        {allowRemove && selectedFileId && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-xs font-semibold text-red-600 hover:text-red-700"
          >
            Remove
          </button>
        )}
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1">
        <button
          type="button"
          onClick={() => setActiveTab("library")}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
            activeTab === "library" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Media library
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("upload")}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
            activeTab === "upload" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Upload files
        </button>
      </div>

      {previewUrl && (
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
          <img src={previewUrl} alt="Selected media preview" className="h-36 w-full rounded-lg object-cover" />
        </div>
      )}

      {activeTab === "library" && (
        <div>
          {loading ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-6 text-center text-sm text-slate-500">
              Loading media library...
            </div>
          ) : files.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-6 text-center text-sm text-slate-500">
              No media found in the library yet.
            </div>
          ) : (
            <div className="grid max-h-72 grid-cols-2 gap-3 overflow-y-auto md:grid-cols-3">
              {files.map((file) => {
                const fileId = file.$id || file.id;
                const isSelected = selectedFileId === fileId;
                return (
                  <button
                    key={fileId}
                    type="button"
                    onClick={() => {
                      setSelectedFileId(fileId);
                      onChange?.(fileId);
                      if (modal) setIsOpen(false);
                    }}
                    className={`overflow-hidden rounded-xl border p-2 text-left transition ${
                      isSelected || selectedFileId === getImagePreview(fileId)
                        ? "border-slate-900 bg-slate-100"
                        : "border-slate-200 bg-white hover:border-slate-400"
                    }`}
                  >
                    <img src={getImagePreview(fileId)} alt={file.name || "Media item"} className="h-24 w-full rounded-lg object-cover" />
                    <div className="mt-2 truncate text-xs text-slate-600">{file.name || file.title || "Media"}</div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === "upload" && (
        <div className="space-y-4">
          <label className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-4 py-8 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
            <span>{uploading ? "Uploading..." : "Choose image to upload"}</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
        </div>
      )}

      {(onAltChange || onTitleChange) && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {onAltChange && (
            <input
              type="text"
              value={altValue || ""}
              onChange={(event) => onAltChange(event.target.value)}
              placeholder="Alt text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
            />
          )}

          {onTitleChange && (
            <input
              type="text"
              value={titleValue || ""}
              onChange={(event) => onTitleChange(event.target.value)}
              placeholder="Image title"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
            />
          )}
        </div>
      )}
    </div>
  );

  if (modal) {
    return (
      <div className="space-y-3">
        {previewUrl && (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
            <img src={previewUrl} alt="Selected preview" className="h-20 w-full rounded-lg object-cover" />
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-100"
        >
          {selectedFileId ? "Replace image" : triggerLabel}
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
            <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <h3 className="text-lg font-semibold text-slate-800">{label}</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-slate-100 px-2 py-1 text-sm text-slate-600 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
              <div className="max-h-[80vh] overflow-y-auto p-4">{pickerContent}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return pickerContent;
}
