import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    language = Column(String(50), nullable=False, default="en")
    category = Column(String(100), nullable=False, default="Daily Conversation")
    difficulty = Column(String(50), nullable=False, default="Normal")
    voice = Column(String(150), nullable=True)
    repeat_default = Column(Integer, nullable=False, default=1)
    content = Column(Text, nullable=False) # Mỗi câu cách nhau bằng một dòng mới '\n'
    is_published = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    # Quan hệ với bảng lịch sử luyện tập
    sessions = relationship("PracticeSession", back_populates="lesson", cascade="all, delete-orphan")


class PracticeSession(Base):
    __tablename__ = "practice_sessions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id", ondelete="SET NULL"), nullable=True)
    language = Column(String(50), nullable=False)
    sentences_count = Column(Integer, nullable=False)
    loops_count = Column(Integer, nullable=False)
    duration_seconds = Column(Integer, nullable=False)
    practiced_at = Column(DateTime, default=datetime.datetime.utcnow)

    # Quan hệ ngược
    lesson = relationship("Lesson", back_populates="sessions")
