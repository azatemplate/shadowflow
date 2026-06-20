# ShadowFlow – AI Shadowing Practice Website

ShadowFlow là một ứng dụng web cao cấp giúp luyện tập phát âm và phản xạ nói đa ngôn ngữ (English, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Trung...) bằng phương pháp **Shadowing** (nhại giọng). Hệ thống phát âm từng câu nói, tự động tạm dừng trong một khoảng thời gian được tính toán thông minh để người dùng đọc đuổi theo, và tự động chuyển sang câu tiếp theo.

Ứng dụng được tối ưu hóa hoàn toàn cho thiết bị di động (Mobile-first responsive), giúp bạn dễ dàng luyện tập một tay trên màn hình điện thoại.

---

## 🚀 Tính Năng Chính

1. **Tự Luyện Tập (Custom Shadowing):** Dán bất kỳ đoạn văn bản nhiều dòng nào để AI tự tách câu và phát âm. Hỗ trợ cấu hình tốc độ đọc (0.5x - 2.0x), số lần lặp lại, chế độ nghỉ tự động/thủ công.
2. **Thư Viện Bài Học (Built-in Library):** Duyệt bài học mẫu theo danh mục và chủ đề (Du lịch, Business, IELTS, Xây dựng...). Lưu bài học yêu thích (Bookmark) và xem lịch sử bài học gần nhất.
3. **Bảng Quản Trị (Admin Panel):**
   - Đăng nhập bảo mật admin bằng mật khẩu.
   - Quản lý bài viết bài luyện tập (CRUD: Thêm, Sửa, Xóa bài học, lưu bản nháp/xuất bản công khai).
   - Nhập dữ liệu hàng loạt từ file CSV một cách nhanh chóng.
   - Theo dõi báo cáo phân tích trực quan: lượt học, tổng số giờ học, phân tích xu hướng ngôn ngữ và bài học nổi bật.
4. **Trình Trình Phát Shadowing AI:** Giao diện tối giản tập trung cao độ, hỗ trợ chế độ đếm ngược thời gian đọc theo, điều khiển dễ dàng và phím tắt thông minh.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, Framer Motion (hiệu ứng chuyển động mượt mà), Lucide Icons.
- **Backend:** FastAPI (Python), SQLAlchemy (ORM).
- **Cơ Sở Dữ Liệu:** SQLite (chạy nội bộ mặc định, không cần cài đặt) & Hỗ trợ sẵn PostgreSQL / Supabase (chỉ cấu hình qua biến môi trường).
- **Phát Âm (TTS):** Web Speech API (SpeechSynthesis) chạy trực tiếp trên trình duyệt, không tốn tài nguyên server.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
shadowing/
├── backend/                  # Mã nguồn Python FastAPI Backend
│   ├── app/
│   │   ├── routers/          # API Endpoints (bài học, thống kê)
│   │   ├── config.py         # Đọc cấu hình biến môi trường
│   │   ├── database.py       # Kết nối SQLite / PostgreSQL
│   │   ├── models.py         # SQLAlchemy SQL tables
│   │   ├── schemas.py        # Pydantic schemas (xác thực dữ liệu)
│   │   └── crud.py           # Thao tác xử lý dữ liệu và thống kê
│   ├── requirements.txt      # Thư viện Python cần thiết
│   └── shadowflow.db         # Cơ sở dữ liệu SQLite tự động khởi tạo
│
├── frontend/                 # Mã nguồn Next.js Frontend
│   ├── src/
│   │   ├── app/              # Next.js Pages (Home, Practice, Lessons, Admin)
│   │   ├── components/       # Các components (Navbar, ThemeProvider)
│   │   └── hooks/            # Custom hook quản lý máy trạng thái âm thanh
│   └── package.json          # Thư viện Next.js cần thiết
│
├── .env                      # File cấu hình biến môi trường (Database & Admin Pass)
├── package.json              # File điều phối chạy fullstack đồng thời
└── README.md                 # Hướng dẫn sử dụng dự án (Tiếng Việt)
```

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Bước 1: Cài đặt các thư viện ở thư mục gốc và Frontend
Mở Terminal tại thư mục gốc `shadowing/` và chạy:
```bash
# Cài đặt thư viện điều phối ở thư mục gốc (concurrently)
npm install

# Cài đặt toàn bộ thư viện Next.js cho frontend
npm run install:all
```

### Bước 2: Cài đặt thư viện Python cho Backend
Di chuyển vào thư mục `backend/` và cài đặt các thư viện cần thiết:
```bash
# Cấu hình virtual environment (Khuyên dùng)
python -m venv .venv
.venv\Scripts\activate   # Trên Windows

# Cài đặt thư viện FastAPI
pip install -r requirements.txt
```

### Bước 3: Cấu hình Môi trường (`.env`)
Dự án đã tự động tạo file cấu hình `.env` ở thư mục gốc:
```env
# Mặc định sử dụng SQLite cục bộ tự động chạy
DATABASE_URL=sqlite:///./shadowflow.db

# Đổi sang PostgreSQL/Supabase nếu muốn triển khai production:
# DATABASE_URL=postgresql://user:password@localhost:5432/shadowflow

# Mật khẩu quản trị Admin Dashboard
ADMIN_PASSWORD=admin123
```

### Bước 4: Chạy đồng thời cả Frontend và Backend
Tại thư mục gốc `shadowing/`, bạn chỉ cần chạy duy nhất một lệnh sau:
```bash
npm run dev
```

Lệnh này sẽ khởi động song song:
- **Frontend (Next.js):** [http://localhost:3000](http://localhost:3000)
- **Backend (FastAPI):** [http://localhost:8000](http://localhost:8000) (Tài liệu API Swagger có sẵn tại [http://localhost:8000/docs](http://localhost:8000/docs))

---

## 🎹 Phím Tắt Điều Khiển Phòng Luyện Tập (Hotkeys)

Khi đang ở phòng luyện tập Shadowing, bạn có thể điều khiển rảnh tay bằng bàn phím máy tính:
- **Phím Cách (Spacebar):** Bắt đầu / Tạm dừng / Tiếp tục học.
- **Mũi Tên Phải (ArrowRight):** Bỏ qua câu cũ, chuyển sang câu tiếp theo.
- **Mũi Tên Trái (ArrowLeft):** Quay lại phát câu trước đó.
- **Phím R:** Phát âm lại câu hiện tại ngay lập tức.
