import { SuiClient } from "@mysten/sui/client";

/**
 * Walrus Client Configuration
 * Walrus is a decentralized storage network built on Sui
 */

// Walrus Aggregator và Publisher URLs cho testnet
const WALRUS_AGGREGATOR_URL = "https://aggregator.walrus-testnet.walrus.space";
const WALRUS_PUBLISHER_URL = "https://publisher.walrus-testnet.walrus.space";

// Walrus Storage Configuration
export const WALRUS_CONFIG = {
  aggregatorUrl: WALRUS_AGGREGATOR_URL,
  publisherUrl: WALRUS_PUBLISHER_URL,
  network: "testnet" as const,
  // Số epochs để store (mặc định là 1 epoch ~24h cho testnet)
  epochs: 5,
};

/**
 * WalrusClient để upload và fetch files từ Walrus storage
 */
export class WalrusClient {
  private aggregatorUrl: string;
  private publisherUrl: string;
  private epochs: number;

  constructor(
    config: {
      aggregatorUrl?: string;
      publisherUrl?: string;
      epochs?: number;
    } = {}
  ) {
    this.aggregatorUrl = config.aggregatorUrl || WALRUS_AGGREGATOR_URL;
    this.publisherUrl = config.publisherUrl || WALRUS_PUBLISHER_URL;
    this.epochs = config.epochs || 5;
  }

  /**
   * Upload file to Walrus storage
   * @param file File to upload
   * @returns Blob ID of the uploaded file
   */
  async upload(file: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${this.publisherUrl}/v1/store?epochs=${this.epochs}`,
        {
          method: "PUT",
          body: file,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();

      // Walrus trả về newlyCreated hoặc alreadyCertified object
      if (result.newlyCreated) {
        return result.newlyCreated.blobObject.blobId;
      } else if (result.alreadyCertified) {
        return result.alreadyCertified.blobId;
      }

      throw new Error("Unexpected response format from Walrus");
    } catch (error) {
      console.error("Error uploading to Walrus:", error);
      throw error;
    }
  }

  /**
   * Get URL to fetch file from Walrus
   * @param blobId Blob ID returned from upload
   * @returns URL to fetch the file
   */
  getFileUrl(blobId: string): string {
    return `${this.aggregatorUrl}/v1/${blobId}`;
  }

  /**
   * Fetch file from Walrus storage
   * @param blobId Blob ID returned from upload
   * @returns File blob
   */
  async fetch(blobId: string): Promise<Blob> {
    try {
      const response = await fetch(this.getFileUrl(blobId));

      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.statusText}`);
      }

      return await response.blob();
    } catch (error) {
      console.error("Error fetching from Walrus:", error);
      throw error;
    }
  }

  /**
   * Check if a blob exists in Walrus storage
   * @param blobId Blob ID to check
   * @returns True if blob exists
   */
  async exists(blobId: string): Promise<boolean> {
    try {
      const response = await fetch(this.getFileUrl(blobId), {
        method: "HEAD",
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }
}

/**
 * Default Walrus client instance
 */
export const walrusClient = new WalrusClient(WALRUS_CONFIG);

/**
 * Helper function to upload file to Walrus
 * @param file File to upload
 * @returns Blob ID and URL
 */
export async function uploadToWalrus(
  file: File
): Promise<{ blobId: string; url: string }> {
  const blobId = await walrusClient.upload(file);
  const url = walrusClient.getFileUrl(blobId);
  return { blobId, url };
}

/**
 * Helper function to get Walrus URL from blob ID
 * @param blobId Blob ID
 * @returns URL to fetch the file
 */
export function getWalrusUrl(blobId: string): string {
  return walrusClient.getFileUrl(blobId);
}
