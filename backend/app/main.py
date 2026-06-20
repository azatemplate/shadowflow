import json
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base, SessionLocal
from .routers import lessons, analytics
from . import models

# Tự động tạo các bảng cơ sở dữ liệu nếu chưa tồn tại
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ShadowFlow API",
    description="Backend API phục vụ ứng dụng luyện Shadowing đa ngôn ngữ",
    version="1.0.0"
)

# Tự động gieo dữ liệu (Seed) bài học mẫu nếu bảng trống hoặc chưa đủ
@app.on_event("startup")
def seed_db():
    db = SessionLocal()
    try:
        # Nếu database trống hoặc chỉ chứa ít hơn 100 bài học (ví dụ: chỉ có 23 bài học cũ),
        # ta sẽ làm sạch và gieo lại toàn bộ 1023 bài học từ JSON
        if db.query(models.Lesson).count() < 100:
            print("Database has less than 100 lessons. Updating with complete static dataset...")
            
            # Xóa các bài học cũ
            db.query(models.Lesson).delete()
            db.commit()
            
            current_dir = os.path.dirname(os.path.abspath(__file__))
            json_path = os.path.join(current_dir, "staticLessons.json")
            
            if os.path.exists(json_path):
                with open(json_path, "r", encoding="utf-8") as f:
                    lessons_data = json.load(f)
                
                for item in lessons_data:
                    is_pub = item.get("is_published", True)
                    db_lesson = models.Lesson(
                        id=item.get("id"),
                        title=item.get("title"),
                        description=item.get("description"),
                        language=item.get("language"),
                        category=item.get("category"),
                        difficulty=item.get("difficulty"),
                        repeat_default=item.get("repeat_default"),
                        content=item.get("content"),
                        is_published=is_pub
                    )
                    db.add(db_lesson)
                db.commit()
                print(f"Database seeded with {len(lessons_data)} lessons from JSON successfully!")
            else:
                print(f"Warning: JSON seed file not found at {json_path}")
    except Exception as e:
        print(f"Error seeding database: {e}")
    finally:
        db.close()

# Cấu hình CORS để cho phép Next.js gọi API từ cổng khác (ví dụ: localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Trong môi trường production nên cấu hình cụ thể tên miền của Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Kết nối các routers
app.include_router(lessons.router)
app.include_router(analytics.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "app": "ShadowFlow API",
        "version": "1.0.0",
        "message": "Hệ thống backend đã sẵn sàng hoạt động!"
    }
