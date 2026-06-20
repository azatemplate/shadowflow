import csv
import io
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from typing import Optional, List
from . import models, schemas

# --- LESSONS CRUD ---

def get_lesson(db: Session, lesson_id: int):
    return db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()

def get_lessons(
    db: Session, 
    skip: int = 0, 
    limit: int = 100, 
    search: Optional[str] = None, 
    language: Optional[str] = None,
    category: Optional[str] = None,
    difficulty: Optional[str] = None,
    include_drafts: bool = False
):
    query = db.query(models.Lesson)
    
    if not include_drafts:
        query = query.filter(models.Lesson.is_published == True)
        
    if search:
        search_filter = f"%{search}%"
        query = query.filter(
            (models.Lesson.title.ilike(search_filter)) | 
            (models.Lesson.description.ilike(search_filter)) |
            (models.Lesson.content.ilike(search_filter))
        )
        
    if language and language != "Auto Detect" and language != "Tất cả":
        query = query.filter(models.Lesson.language == language)
        
    if category and category != "Tất cả":
        query = query.filter(models.Lesson.category == category)
        
    if difficulty and difficulty != "Tất cả":
        query = query.filter(models.Lesson.difficulty == difficulty)
        
    return query.order_by(desc(models.Lesson.created_at)).offset(skip).limit(limit).all()

def create_lesson(db: Session, lesson: schemas.LessonCreate):
    db_lesson = models.Lesson(
        title=lesson.title,
        description=lesson.description,
        language=lesson.language,
        category=lesson.category,
        difficulty=lesson.difficulty,
        voice=lesson.voice,
        repeat_default=lesson.repeat_default,
        content=lesson.content.strip(),
        is_published=lesson.is_published
    )
    db.add(db_lesson)
    db.commit()
    db.refresh(db_lesson)
    return db_lesson

def update_lesson(db: Session, lesson_id: int, lesson_update: schemas.LessonUpdate):
    db_lesson = get_lesson(db, lesson_id)
    if not db_lesson:
        return None
    
    update_data = lesson_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_lesson, key, value)
        
    db.commit()
    db.refresh(db_lesson)
    return db_lesson

def delete_lesson(db: Session, lesson_id: int):
    db_lesson = get_lesson(db, lesson_id)
    if not db_lesson:
        return False
    db.delete(db_lesson)
    db.commit()
    return True

# --- PRACTICE SESSIONS CRUD ---

def create_practice_session(db: Session, session: schemas.PracticeSessionCreate):
    db_session = models.PracticeSession(
        lesson_id=session.lesson_id,
        language=session.language,
        sentences_count=session.sentences_count,
        loops_count=session.loops_count,
        duration_seconds=session.duration_seconds
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return db_session

# --- ANALYTICS & CSV ---

def get_analytics_summary(db: Session) -> schemas.AnalyticsSummary:
    # 1. Tổng số bài học
    total_lessons = db.query(models.Lesson).count()
    
    # 2. Tổng số lượt luyện tập
    total_sessions = db.query(models.PracticeSession).count()
    
    # 3. Tổng thời lượng luyện tập (giờ)
    total_seconds = db.query(func.sum(models.PracticeSession.duration_seconds)).scalar() or 0
    total_duration_hours = round(total_seconds / 3600.0, 2)
    
    # 4. Thống kê theo ngôn ngữ
    lang_query = db.query(
        models.PracticeSession.language,
        func.count(models.PracticeSession.id).label("session_count"),
        func.sum(models.PracticeSession.duration_seconds).label("total_seconds")
    ).group_by(models.PracticeSession.language).all()
    
    language_stats = [
        schemas.LanguagePracticeStats(
            language=row.language,
            session_count=row.session_count,
            total_duration_minutes=round((row.total_seconds or 0) / 60.0, 2)
        )
        for row in lang_query
    ]
    
    # 5. Bài học được luyện tập nhiều nhất
    lesson_query = db.query(
        models.PracticeSession.lesson_id,
        func.count(models.PracticeSession.id).label("session_count")
    ).group_by(models.PracticeSession.lesson_id).order_by(desc("session_count")).limit(5).all()
    
    most_practiced_lessons = []
    for row in lesson_query:
        if row.lesson_id is not None:
            lesson = db.query(models.Lesson).filter(models.Lesson.id == row.lesson_id).first()
            title = lesson.title if lesson else "Bài học đã bị xóa"
        else:
            title = "Tự nhập văn bản"
            
        most_practiced_lessons.append(
            schemas.LessonPracticeStats(
                lesson_id=row.lesson_id,
                lesson_title=title,
                session_count=row.session_count
            )
        )
        
    return schemas.AnalyticsSummary(
        total_lessons=total_lessons,
        total_sessions=total_sessions,
        total_duration_hours=total_duration_hours,
        language_stats=language_stats,
        most_practiced_lessons=most_practiced_lessons
    )

def import_lessons_from_csv(db: Session, csv_content: str) -> int:
    """
    Hỗ trợ import bài học hàng loạt từ CSV.
    Trả về số lượng bài học đã import thành công.
    File CSV cần có tiêu đề: title,description,language,category,difficulty,voice,repeat_default,content
    """
    f = io.StringIO(csv_content)
    reader = csv.DictReader(f)
    
    imported_count = 0
    for row in reader:
        # Bắt buộc phải có title và content
        if not row.get("title") or not row.get("content"):
            continue
            
        # Chuẩn hóa content: Nếu nội dung ngăn cách bằng '|' thì đổi thành '\n'
        content = row.get("content", "").replace("|", "\n").strip()
        
        repeat_default = 1
        try:
            repeat_default = int(row.get("repeat_default", 1))
        except ValueError:
            pass
            
        db_lesson = models.Lesson(
            title=row.get("title", "").strip(),
            description=row.get("description", "").strip() or None,
            language=row.get("language", "en").strip(),
            category=row.get("category", "Daily Conversation").strip(),
            difficulty=row.get("difficulty", "Normal").strip(),
            voice=row.get("voice", "").strip() or None,
            repeat_default=repeat_default,
            content=content,
            is_published=row.get("is_published", "true").lower() in ("true", "1", "yes")
        )
        db.add(db_lesson)
        imported_count += 1
        
    if imported_count > 0:
        db.commit()
        
    return imported_count
