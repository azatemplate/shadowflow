from fastapi import APIRouter, Depends, HTTPException, status, Header
from sqlalchemy.orm import Session
from typing import Optional
from ..database import get_db
from .. import schemas, crud, config

router = APIRouter(
    tags=["analytics"]
)

# Hàm kiểm tra mật khẩu Admin qua Header
def verify_admin_key(x_admin_password: Optional[str] = Header(None)):
    if config.ADMIN_PASSWORD and x_admin_password != config.ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Bạn không có quyền truy cập dữ liệu thống kê. Mật khẩu Admin không đúng."
        )

@router.post("/api/sessions", response_model=schemas.PracticeSessionResponse)
def record_session(
    session: schemas.PracticeSessionCreate,
    db: Session = Depends(get_db)
):
    """
    Ghi nhận một phiên luyện tập hoàn thành (gọi từ màn hình Practice của User)
    """
    try:
        return crud.create_practice_session(db=db, session=session)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Lỗi ghi nhận lịch sử luyện tập: {str(e)}"
        )

@router.get("/api/analytics", response_model=schemas.AnalyticsSummary, dependencies=[Depends(verify_admin_key)])
def get_analytics(
    db: Session = Depends(get_db)
):
    """
    Lấy thông tin tổng hợp số liệu phân tích dành cho Admin Dashboard
    """
    return crud.get_analytics_summary(db=db)
