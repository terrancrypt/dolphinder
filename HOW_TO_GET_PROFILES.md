# Lấy Danh Sách NFT Profiles

## 📦 File cần dùng

- `src/lib/getProfiles.ts` - Functions để query profiles
- `scripts/testQueryProfiles.ts` - Script test

## 🚀 Cách dùng

### 1. Lấy tất cả profiles đã mint

```typescript
import { getAllProfiles } from "./src/lib/getProfiles";

const profiles = await getAllProfiles("YOUR_PACKAGE_ID");

// profiles = [
//   { profileId: '0x...', owner: '0x...', name: 'John', createdAt: 123456 },
//   { profileId: '0x...', owner: '0x...', name: 'Jane', createdAt: 123457 },
// ]
```

### 2. Lấy profile của một user

```typescript
import { getMyProfile } from "./src/lib/getProfiles";

const profile = await getMyProfile("YOUR_PACKAGE_ID", "USER_ADDRESS");
```

### 3. Lấy chi tiết một profile

```typescript
import { getProfileDetails } from "./src/lib/getProfiles";

const details = await getProfileDetails("YOUR_PACKAGE_ID", "PROFILE_ID");
// Trả về: { name, bio, avatar_url, project_count, ... }
```

## 🧪 Test

```bash
# 1. Cập nhật PACKAGE_ID trong scripts/testQueryProfiles.ts
# 2. Chạy:
tsx scripts/testQueryProfiles.ts
```

## 💡 Query bằng curl

```bash
curl -X POST https://fullnode.testnet.sui.io:443 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "suix_queryEvents",
    "params": [{
      "MoveEventType": "PACKAGE_ID::profiles::ProfileCreated"
    }, null, 100, false]
  }'
```

Xong!
