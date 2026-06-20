from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Header, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from ..database import get_db
from .. import schemas, crud, config

router = APIRouter(
    prefix="/api/lessons",
    tags=["lessons"]
)

# Hàm kiểm tra mật khẩu Admin qua Header
def verify_admin_key(x_admin_password: Optional[str] = Header(None)):
    if config.ADMIN_PASSWORD and x_admin_password != config.ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Bạn không có quyền thực hiện hành động này. Mật khẩu Admin không hợp lệ."
        )

@router.get("", response_model=List[schemas.LessonResponse])
def read_lessons(
    skip: int = 0,
    limit: int = 100,
    search: Optional[str] = None,
    language: Optional[str] = None,
    category: Optional[str] = None,
    difficulty: Optional[str] = None,
    include_drafts: bool = Query(False, description="Bao gồm cả bản nháp (dành cho Admin)"),
    x_admin_password: Optional[str] = Header(None),
    db: Session = Depends(get_db)
):
    # Nếu muốn xem bản nháp, phải xác minh quyền admin
    is_admin = False
    if x_admin_password and x_admin_password == config.ADMIN_PASSWORD:
        is_admin = True
        
    include_drafts_final = include_drafts and is_admin
    lessons = crud.get_lessons(
        db, 
        skip=skip, 
        limit=limit, 
        search=search, 
        language=language, 
        category=category, 
        difficulty=difficulty,
        include_drafts=include_drafts_final
    )
    return lessons

@router.get("/{lesson_id}", response_model=schemas.LessonResponse)
def read_lesson(lesson_id: int, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_id=lesson_id)
    if db_lesson is None:
        raise HTTPException(status_code=404, detail="Không tìm thấy bài học")
    return db_lesson

@router.post("", response_model=schemas.LessonResponse, dependencies=[Depends(verify_admin_key)])
def create_new_lesson(lesson: schemas.LessonCreate, db: Session = Depends(get_db)):
    return crud.create_lesson(db=db, lesson=lesson)

@router.put("/{lesson_id}", response_model=schemas.LessonResponse, dependencies=[Depends(verify_admin_key)])
def update_existing_lesson(lesson_id: int, lesson_update: schemas.LessonUpdate, db: Session = Depends(get_db)):
    db_lesson = crud.update_lesson(db=db, lesson_id=lesson_id, lesson_update=lesson_update)
    if db_lesson is None:
        raise HTTPException(status_code=404, detail="Không tìm thấy bài học để cập nhật")
    return db_lesson

@router.delete("/{lesson_id}", dependencies=[Depends(verify_admin_key)])
def delete_existing_lesson(lesson_id: int, db: Session = Depends(get_db)):
    success = crud.delete_lesson(db=db, lesson_id=lesson_id)
    if not success:
        raise HTTPException(status_code=404, detail="Không tìm thấy bài học để xóa")
    return {"message": "Xóa bài học thành công"}

@router.post("/upload-csv", dependencies=[Depends(verify_admin_key)])
async def upload_csv_lessons(file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Chỉ chấp nhận file định dạng .csv")
        
    try:
        contents = await file.read()
        csv_text = contents.decode("utf-8")
        imported_count = crud.import_lessons_from_csv(db, csv_text)
        return {
            "message": f"Đã nhập dữ liệu thành công {imported_count} bài học",
            "count": imported_count
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Đã xảy ra lỗi khi xử lý file CSV: {str(e)}")
