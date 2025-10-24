import { useState } from "react";
import { useWalrus } from "../providers/GlobalSuiProvider";
import { Button } from "../shared/Button";

/**
 * Component demo upload file lên Walrus
 */
export function WalrusUploadDemo() {
  const walrus = useWalrus();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [blobId, setBlobId] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
      // Create local preview
      const localUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(localUrl);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setUploading(true);
    setError("");

    try {
      // Upload to Walrus
      const uploadedBlobId = await walrus.upload(file);
      setBlobId(uploadedBlobId);

      // Get Walrus URL
      const walrusUrl = walrus.getFileUrl(uploadedBlobId);
      setPreviewUrl(walrusUrl);

      console.log("Upload successful!");
      console.log("Blob ID:", uploadedBlobId);
      console.log("Walrus URL:", walrusUrl);
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
      <h2 className="text-xl font-bold text-white">Walrus Upload Demo</h2>

      {/* File Input */}
      <div>
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-300"
        >
          Select File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
        />
      </div>

      {/* Upload Button */}
      <Button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full"
      >
        {uploading ? "Uploading..." : "Upload to Walrus"}
      </Button>

      {/* Error Message */}
      {error && (
        <div className="rounded-md bg-red-900/20 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Success Result */}
      {blobId && (
        <div className="space-y-2 rounded-md bg-green-900/20 p-3">
          <p className="text-sm font-semibold text-green-400">
            Upload Successful!
          </p>
          <div className="space-y-1 text-xs text-gray-300">
            <p className="break-all">
              <span className="font-semibold">Blob ID:</span> {blobId}
            </p>
            <p className="break-all">
              <span className="font-semibold">URL:</span>{" "}
              <a
                href={walrus.getFileUrl(blobId)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {walrus.getFileUrl(blobId)}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Preview */}
      {previewUrl && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-300">Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full rounded-md border border-gray-700"
          />
        </div>
      )}
    </div>
  );
}
