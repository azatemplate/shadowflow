import os
from dotenv import load_dotenv

# Tìm và load file .env ở thư mục gốc (Parent of backend directory)
root_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
dotenv_path = os.path.join(root_dir, ".env")

if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
else:
    load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./shadowflow.db")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "admin123")
