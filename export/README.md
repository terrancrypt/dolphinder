# Export Folder

Folder này chứa các file export từ script `exportProfiles.ts`.

## Files sẽ được tạo:

- `profiles-basic.json` - Danh sách profiles cơ bản (profile ID, owner, name)
- `profiles-detailed.json` - Danh sách profiles chi tiết đầy đủ
- `profiles.csv` - Format CSV để mở bằng Excel/Google Sheets
- `profiles.md` - Format Markdown để đọc

## Cách sử dụng:

```bash
# Chạy script export
tsx scripts/exportProfiles.ts
```

## Note:

File này được git ignore để tránh commit data không cần thiết.
