from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

# Schema cho Lesson
class LessonBase(BaseModel):
    title: str = Field(..., max_length=255, description="Tiêu đề bài học")
    description: Optional[str] = Field(None, description="Mô tả bài học")
    language: str = Field("en", max_length=50, description="Ngôn ngữ bài học (en, vi, ja, ko, zh...)")
    category: str = Field("Daily Conversation", max_length=100, description="Danh mục (Daily Conversation, Business...)")
    difficulty: str = Field("Normal", max_length=50, description="Độ khó (Beginner, Normal, Advanced)")
    voice: Optional[str] = Field(None, max_length=150, description="Tên giọng đọc đề xuất")
    repeat_default: int = Field(1, ge=1, le=99, description="Số lần lặp lại mặc định")
    content: str = Field(..., description="Nội dung bài học, mỗi dòng là một câu")
    is_published: bool = Field(True, description="Trạng thái xuất bản (True) hoặc bản nháp (False)")

class LessonCreate(LessonBase):
    pass

class LessonUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=255)
    description: Optional[str] = None
    language: Optional[str] = Field(None, max_length=50)
    category: Optional[str] = Field(None, max_length=100)
    difficulty: Optional[str] = Field(None, max_length=50)
    voice: Optional[str] = Field(None, max_length=150)
    repeat_default: Optional[int] = Field(None, ge=1, le=99)
    content: Optional[str] = None
    is_published: Optional[bool] = None

class LessonResponse(LessonBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# Schema cho PracticeSession
class PracticeSessionBase(BaseModel):
    lesson_id: Optional[int] = Field(None, description="ID bài học (nếu có, NULL nếu là nhập văn bản tự do)")
    language: str = Field(..., max_length=50, description="Ngôn ngữ thực hành")
    sentences_count: int = Field(..., ge=1, description="Số lượng câu trong bài")
    loops_count: int = Field(..., ge=1, description="Số vòng lặp thực hiện")
    duration_seconds: int = Field(..., ge=0, description="Thời gian thực hành tính bằng giây")

class PracticeSessionCreate(PracticeSessionBase):
    pass

class PracticeSessionResponse(PracticeSessionBase):
    id: int
    practiced_at: datetime

    class Config:
        from_attributes = True

# Schema cho Analytics
class LanguagePracticeStats(BaseModel):
    language: str
    session_count: int
    total_duration_minutes: float

class LessonPracticeStats(BaseModel):
    lesson_id: Optional[int]
    lesson_title: str
    session_count: int

class AnalyticsSummary(BaseModel):
    total_lessons: int
    total_sessions: int
    total_duration_hours: float
    language_stats: List[LanguagePracticeStats]
    most_practiced_lessons: List[LessonPracticeStats]
