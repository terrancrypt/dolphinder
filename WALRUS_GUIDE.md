# Walrus Client Configuration

Walrus là một mạng lưu trữ phi tập trung được xây dựng trên Sui blockchain. File này chứa cấu hình và hướng dẫn sử dụng Walrus trong dự án.

## 📦 Cài đặt

Các dependencies đã được cấu hình sẵn trong `package.json`. Chạy:

```bash
pnpm install
```

## 🔧 Cấu hình

### 1. WalrusClient (`src/lib/walrus.ts`)

Client cơ bản để tương tác với Walrus storage:

```typescript
import { walrusClient, uploadToWalrus, getWalrusUrl } from "@/lib/walrus";

// Upload file
const { blobId, url } = await uploadToWalrus(file);

// Get URL từ blob ID
const url = getWalrusUrl(blobId);

// Hoặc sử dụng client trực tiếp
const blobId = await walrusClient.upload(file);
const blob = await walrusClient.fetch(blobId);
const exists = await walrusClient.exists(blobId);
```

### 2. GlobalSuiProvider với WalrusContext

WalrusClient đã được tích hợp vào `GlobalSuiProvider`:

```typescript
import { useWalrus } from '@/components/providers/GlobalSuiProvider';

function MyComponent() {
  const walrus = useWalrus();

  const handleUpload = async (file: File) => {
    const blobId = await walrus.upload(file);
    const url = walrus.getFileUrl(blobId);
    console.log('Uploaded:', url);
  };

  return <button onClick={() => handleUpload(myFile)}>Upload</button>;
}
```

## 🎣 Hooks

### useWalrusUpload

Hook với state management cho việc upload:

```typescript
import { useWalrusUpload } from '@/lib/useWalrus';

function UploadComponent() {
  const { upload, uploading, error, blobId, url } = useWalrusUpload();

  const handleUpload = async (file: File) => {
    try {
      const id = await upload(file);
      console.log('Uploaded:', id);
      console.log('URL:', url);
    } catch (err) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button disabled={uploading} onClick={() => handleUpload(myFile)}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p>Error: {error}</p>}
      {blobId && <p>Blob ID: {blobId}</p>}
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
}
```

### useWalrusFetch

Hook để fetch file từ Walrus:

```typescript
import { useWalrusFetch } from '@/lib/useWalrus';

function FetchComponent({ blobId }: { blobId: string }) {
  const { fetch, loading, error, blob, url } = useWalrusFetch(blobId);

  useEffect(() => {
    fetch();
  }, [blobId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {url && <img src={url} alt="Fetched" />}
    </div>
  );
}
```

## 🎨 Component Demo

Component demo hoàn chỉnh: `src/components/common/WalrusUploadDemo.tsx`

Để sử dụng trong page:

```astro
---
import MainLayout from "@/components/MainLayout.astro";
import { WalrusUploadDemo } from "@/components/common/WalrusUploadDemo";
---

<MainLayout title="Walrus Demo">
  <div class="container mx-auto p-4">
    <WalrusUploadDemo client:load />
  </div>
</MainLayout>
```

## 🌐 Testnet URLs

- **Aggregator**: https://aggregator.walrus-testnet.walrus.space
- **Publisher**: https://publisher.walrus-testnet.walrus.space

## 📝 Ví dụ sử dụng trong Developer Profile

```typescript
// Upload avatar
const avatarFile = e.target.files[0];
const { blobId, url } = await uploadToWalrus(avatarFile);

// Lưu blob ID vào Sui blockchain
await suiClient.executeMoveCall({
  packageObjectId: PACKAGE_ID,
  module: 'profile',
  function: 'update_avatar',
  arguments: [profileId, blobId],
});

// Display avatar
<img src={getWalrusUrl(profile.avatarBlobId)} alt="Avatar" />
```

## 🔗 Resources

- [Walrus Documentation](https://docs.walrus.site)
- [Sui Documentation](https://docs.sui.io)
- [Walrus Testnet](https://testnet.walrus.site)

## ⚙️ Configuration Options

Có thể tùy chỉnh cấu hình trong `src/lib/walrus.ts`:

```typescript
export const WALRUS_CONFIG = {
  aggregatorUrl: "https://aggregator.walrus-testnet.walrus.space",
  publisherUrl: "https://publisher.walrus-testnet.walrus.space",
  network: "testnet",
  epochs: 5, // Số epochs để lưu trữ (1 epoch ≈ 24h)
};
```

## 🚀 Next Steps

1. ✅ Tích hợp upload avatar/banner trong Developer Profile
2. ✅ Lưu blob ID on-chain
3. ✅ Display images từ Walrus trong UI
4. ⬜ Upload portfolio images
5. ⬜ Upload project thumbnails
6. ⬜ Upload certificates/credentials
