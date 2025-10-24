/**
 * 🧪 Test lấy profiles
 * Chạy: tsx scripts/testQueryProfiles.ts
 */

import { getAllProfiles, getProfileDetails } from "../src/lib/getProfiles";

const PACKAGE_ID = "YOUR_PACKAGE_ID_HERE"; // ⚠️ Thay sau khi deploy
const NETWORK = "testnet";

async function main() {
  console.log("🚀 Lấy danh sách profiles...\n");

  try {
    const profiles = await getAllProfiles(PACKAGE_ID, NETWORK);
    console.log(`✅ Tìm thấy ${profiles.length} profiles\n`);

    if (profiles.length > 0) {
      profiles.forEach((p, i) => {
        console.log(`${i + 1}. ${p.name}`);
        console.log(`   Owner: ${p.owner.slice(0, 10)}...`);
        console.log(`   ID: ${p.profileId.slice(0, 10)}...`);
        console.log(
          `   Created: ${new Date(p.createdAt).toLocaleDateString()}\n`
        );
      });

      // Lấy chi tiết profile đầu tiên
      console.log("📋 Chi tiết profile đầu tiên:");
      const details = await getProfileDetails(
        PACKAGE_ID,
        profiles[0].profileId,
        NETWORK
      );
      console.log(JSON.stringify(details, null, 2));
    } else {
      console.log("⚠️ Chưa có profile nào. Mint profile trước!");
    }
  } catch (error) {
    console.error("❌ Lỗi:", error);
  }
}

main();
