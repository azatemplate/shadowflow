@echo off
title ShadowFlow Fullstack Dev Server
echo ===================================================
echo   ShadowFlow - AI Shadowing Practice App Launcher
echo ===================================================
echo.

:: Di chuyển đến thư mục chứa file script
cd /d "%~dp0"

:: Kiểm tra và kích hoạt môi trường ảo Python của Backend nếu có
if exist "backend\.venv\Scripts\activate.bat" (
    echo [INFO] Dang kich hoat moi truong ao Python venv...
    call backend\.venv\Scripts\activate.bat
) else (
    echo [WARN] Khong tim thay thu muc moi truong ao backend/.venv.
    echo [WARN] He thong se su dung Python he thong Global Python.
)

echo.
echo [INFO] Dang khoi dong dong thoi ca Frontend (Next.js) va Backend (FastAPI)...
echo [INFO] Vui long doi trong giay lat...
echo.

:: Khởi chạy fullstack
call npm run dev

pause
