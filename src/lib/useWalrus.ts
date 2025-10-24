import { useState } from "react";
import { useWalrus } from "../components/providers/GlobalSuiProvider";

/**
 * Hook để upload file lên Walrus với state management
 */
export function useWalrusUpload() {
  const walrus = useWalrus();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blobId, setBlobId] = useState<string | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    setBlobId(null);

    try {
      const uploadedBlobId = await walrus.upload(file);
      setBlobId(uploadedBlobId);
      return uploadedBlobId;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Upload failed";
      setError(errorMessage);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  const getUrl = (id?: string) => {
    const targetId = id || blobId;
    if (!targetId) return null;
    return walrus.getFileUrl(targetId);
  };

  const reset = () => {
    setUploading(false);
    setError(null);
    setBlobId(null);
  };

  return {
    upload,
    getUrl,
    reset,
    uploading,
    error,
    blobId,
    url: getUrl(),
  };
}

/**
 * Hook để fetch file từ Walrus
 */
export function useWalrusFetch(blobId?: string) {
  const walrus = useWalrus();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);

  const fetch = async (id?: string) => {
    const targetId = id || blobId;
    if (!targetId) {
      setError("No blob ID provided");
      return null;
    }

    setLoading(true);
    setError(null);
    setBlob(null);

    try {
      const fetchedBlob = await walrus.fetch(targetId);
      setBlob(fetchedBlob);
      return fetchedBlob;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Fetch failed";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getUrl = (id?: string) => {
    const targetId = id || blobId;
    if (!targetId) return null;
    return walrus.getFileUrl(targetId);
  };

  return {
    fetch,
    getUrl,
    loading,
    error,
    blob,
    url: getUrl(),
  };
}
