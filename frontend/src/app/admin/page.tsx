'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, LayoutDashboard, PlusCircle, FileSpreadsheet, List, 
  Trash2, Edit, Save, X, BarChart3, Upload, CheckCircle2, AlertCircle, Eye, EyeOff 
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  voice: string | null;
  repeat_default: number;
  content: string;
  is_published: boolean;
  created_at: string;
}

interface LanguageStat {
  language: string;
  session_count: number;
  total_duration_minutes: number;
}

interface LessonStat {
  lesson_id: number | null;
  lesson_title: string;
  session_count: number;
}

interface AnalyticsSummary {
  total_lessons: number;
  total_sessions: number;
  total_duration_hours: number;
  language_stats: LanguageStat[];
  most_practiced_lessons: LessonStat[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Điều hướng Tab
  const [activeTab, setActiveTab] = useState<'analytics' | 'lessons' | 'create' | 'csv'>('analytics');

  // Trạng thái dữ liệu
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form tạo bài học
  const [newLesson, setNewLesson] = useState({
    title: '',
    description: '',
    language: 'en',
    category: 'Daily Conversation',
    difficulty: 'Normal',
    voice: '',
    repeat_default: 1,
    content: '',
    is_published: true
  });

  // Chỉnh sửa bài học
  const [editingLessonId, setEditingLessonId] = useState<number | null>(null);
  const [editingFields, setEditingFields] = useState<Partial<Lesson>>({});

  // File CSV
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvUploading, setCsvUploading] = useState(false);

  const getLanguageLabel = (code: string) => {
    switch (code.toLowerCase()) {
      case 'en': return 'Tiếng Anh';
      case 'vi': return 'Tiếng Việt';
      case 'ja': return 'Tiếng Nhật';
      case 'ko': return 'Tiếng Hàn';
      case 'zh': return 'Tiếng Trung';
      default: return code;
    }
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  // 1. Kiểm tra xác thực ban đầu
  useEffect(() => {
    const savedPassword = localStorage.getItem('shadowflow_admin_pass');
    if (savedPassword) {
      testPassword(savedPassword);
    } else {
      setCheckingAuth(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testPassword = async (pass: string) => {
    try {
      const res = await fetch(`${API_URL}/api/lessons?include_drafts=true`, {
        headers: { 'x-admin-password': pass }
      });
      if (res.ok) {
        localStorage.setItem('shadowflow_admin_pass', pass);
        setAdminPassword(pass);
        setIsLoggedIn(true);
        setAuthError('');
      } else {
        localStorage.removeItem('shadowflow_admin_pass');
        setAuthError('Mật khẩu Admin đã thay đổi hoặc không chính xác.');
      }
    } catch (e) {
      // Khi offline, cho phép đăng nhập thử nếu mật khẩu trùng khớp mặc định
      if (pass === 'admin123') {
        localStorage.setItem('shadowflow_admin_pass', pass);
        setAdminPassword(pass);
        setIsLoggedIn(true);
        setAuthError('');
      } else {
        setAuthError('Không thể kết nối đến máy chủ để xác thực mật khẩu.');
      }
    } finally {
      setCheckingAuth(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPassword.trim()) return;
    testPassword(adminPassword);
  };

  const handleLogout = () => {
    localStorage.removeItem('shadowflow_admin_pass');
    setIsLoggedIn(false);
    setAdminPassword('');
  };

  // 2. Fetch dữ liệu bài học & thống kê
  const fetchData = async () => {
    if (!isLoggedIn) return;
    setLoadingData(true);
    try {
      // Load bài học
      const resLessons = await fetch(`${API_URL}/api/lessons?include_drafts=true`, {
        headers: { 'x-admin-password': adminPassword }
      });
      if (resLessons.ok) {
        const data = await resLessons.json();
        setLessons(data);
      }

      // Load thống kê
      const resAnalytics = await fetch(`${API_URL}/api/analytics`, {
        headers: { 'x-admin-password': adminPassword }
      });
      if (resAnalytics.ok) {
        const data = await resAnalytics.json();
        setAnalytics(data);
      }
    } catch (e) {
      showToast("Không kết nối được API. Chạy chế độ Offline Mock data.", "error");
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, activeTab]);

  // 3. Thêm bài học mới
  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/lessons`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(newLesson)
      });

      if (res.ok) {
        showToast("Tạo bài học mới thành công!");
        setNewLesson({
          title: '',
          description: '',
          language: 'en',
          category: 'Daily Conversation',
          difficulty: 'Normal',
          voice: '',
          repeat_default: 1,
          content: '',
          is_published: true
        });
        setActiveTab('lessons');
      } else {
        const err = await res.json();
        showToast(err.detail || "Đã xảy ra lỗi khi tạo bài học", "error");
      }
    } catch (e) {
      showToast("Không thể gửi dữ liệu. Kiểm tra kết nối mạng/API.", "error");
    }
  };

  // 4. Xóa bài học
  const handleDeleteLesson = async (id: number) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài học này không?")) return;

    try {
      const res = await fetch(`${API_URL}/api/lessons/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': adminPassword }
      });

      if (res.ok) {
        showToast("Đã xóa bài học thành công!");
        fetchData();
      } else {
        showToast("Lỗi khi xóa bài học", "error");
      }
    } catch (e) {
      showToast("Không thể kết nối đến API.", "error");
    }
  };

  // 5. Cập nhật bài học
  const handleStartEdit = (lesson: Lesson) => {
    setEditingLessonId(lesson.id);
    setEditingFields(lesson);
  };

  const handleCancelEdit = () => {
    setEditingLessonId(null);
    setEditingFields({});
  };

  const handleSaveEdit = async () => {
    if (!editingLessonId) return;

    try {
      const res = await fetch(`${API_URL}/api/lessons/${editingLessonId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(editingFields)
      });

      if (res.ok) {
        showToast("Cập nhật bài học thành công!");
        setEditingLessonId(null);
        setEditingFields({});
        fetchData();
      } else {
        showToast("Lỗi khi cập nhật bài học", "error");
      }
    } catch (e) {
      showToast("Không kết nối được API.", "error");
    }
  };

  // 6. Upload CSV
  const handleCsvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleUploadCsv = async () => {
    if (!csvFile) return;
    setCsvUploading(true);

    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const res = await fetch(`${API_URL}/api/lessons/upload-csv`, {
        method: 'POST',
        headers: { 'x-admin-password': adminPassword },
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        showToast(data.message || `Đã tải thành công file CSV!`);
        setCsvFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setActiveTab('lessons');
      } else {
        const data = await res.json();
        showToast(data.detail || "Lỗi khi upload CSV", "error");
      }
    } catch (e) {
      showToast("Không kết nối được API.", "error");
    } finally {
      setCsvUploading(false);
    }
  };

  // ĐANG CHỜ CHECK AUTH
  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 text-sm">Đang xác thực thông tin...</p>
        </div>
      </div>
    );
  }

  // CHƯA ĐĂNG NHẬP ADMIN - HIỂN THỊ TRANG NHẬP PASS
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl shadow-xl relative z-10"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                <Lock size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Bảng Điều Phối Admin</h2>
              <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">Vui lòng điền mật khẩu quản trị viên để tiếp tục.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Mật khẩu Admin (mặc định: admin123)"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-950 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-400"
                  required
                />
              </div>

              {authError && (
                <div className="rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/40 p-3 text-xs text-red-600 dark:text-red-400 font-semibold flex items-center gap-2">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 text-sm shadow-lg shadow-indigo-600/10 transition-all duration-200 active:scale-95"
              >
                Xác nhận Đăng nhập
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  // ĐÃ ĐĂNG NHẬP THÀNH CÔNG - HIỂN THỊ DASHBOARD CHÍNH
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-5 py-3 text-xs sm:text-sm font-semibold shadow-xl border backdrop-blur-md flex items-center gap-2 ${
              toast.type === 'success' 
                ? 'bg-slate-900/90 text-white border-slate-700/50' 
                : 'bg-red-900/90 text-white border-red-700/50'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={16} className="text-green-400" /> : <AlertCircle size={16} className="text-red-400" />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tiêu đề & Logout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Admin Dashboard</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Quản lý kho bài học, xem báo cáo thống kê và upload dữ liệu hàng loạt.</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-4 py-2 text-xs font-bold dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200"
          >
            Đăng xuất Admin
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeTab === 'analytics'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
            }`}
          >
            <BarChart3 size={16} /> Báo cáo thống kê
          </button>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeTab === 'lessons'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
            }`}
          >
            <List size={16} /> Quản lý bài học
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeTab === 'create'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
            }`}
          >
            <PlusCircle size={16} /> Tạo bài học mới
          </button>
          <button
            onClick={() => setActiveTab('csv')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeTab === 'csv'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
            }`}
          >
            <FileSpreadsheet size={16} /> Nhập từ CSV
          </button>
        </div>

        {/* NỘI DUNG TỪNG TAB */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: ANALYTICS (THỐNG KÊ) */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Thống kê dạng thẻ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass-panel p-6 rounded-3xl">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Tổng số bài học</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{analytics?.total_lessons ?? lessons.length}</h2>
                </div>
                <div className="glass-panel p-6 rounded-3xl">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Lượt thực hành</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{analytics?.total_sessions ?? 0}</h2>
                </div>
                <div className="glass-panel p-6 rounded-3xl">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Thời lượng luyện (Giờ)</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{analytics?.total_duration_hours ?? 0} giờ</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Luyện tập theo Ngôn ngữ */}
                <div className="glass-panel p-6 rounded-3xl">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">Mức độ luyện tập theo ngôn ngữ</h3>
                  
                  {!analytics || analytics.language_stats.length === 0 ? (
                    <p className="text-xs text-slate-500 py-6 text-center">Chưa có dữ liệu luyện tập ngôn ngữ.</p>
                  ) : (
                    <div className="space-y-4">
                      {analytics.language_stats.map(stat => (
                        <div key={stat.language}>
                          <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            <span>{getLanguageLabel(stat.language)}</span>
                            <span>{stat.session_count} phiên ({stat.total_duration_minutes} phút)</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-indigo-600 dark:bg-indigo-400" 
                              style={{ width: `${Math.min(100, (stat.session_count / (analytics.total_sessions || 1)) * 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bài học được học nhiều nhất */}
                <div className="glass-panel p-6 rounded-3xl">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">Bài học luyện tập nhiều nhất</h3>
                  
                  {!analytics || analytics.most_practiced_lessons.length === 0 ? (
                    <p className="text-xs text-slate-500 py-6 text-center">Chưa ghi nhận lượt luyện tập bài học nào.</p>
                  ) : (
                    <div className="space-y-4">
                      {analytics.most_practiced_lessons.map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-center gap-4 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold font-mono h-6 w-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{stat.lesson_title}</span>
                          </div>
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0">{stat.session_count} lượt học</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QUẢN LÝ BÀI HỌC (CRUD TABLE) */}
          {activeTab === 'lessons' && (
            <div className="glass-panel p-6 rounded-3xl overflow-hidden">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">Danh sách bài học</h3>

              <div className="overflow-x-auto -mx-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <th className="px-6 py-4">Bài học</th>
                      <th className="px-6 py-4">Ngôn ngữ</th>
                      <th className="px-6 py-4">Danh mục</th>
                      <th className="px-6 py-4">Độ khó</th>
                      <th className="px-6 py-4">Trạng thái</th>
                      <th className="px-6 py-4 text-right">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                    {lessons.map(lesson => {
                      const isEditing = editingLessonId === lesson.id;
                      return (
                        <tr key={lesson.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                          {/* Tiêu đề & Mô tả */}
                          <td className="px-6 py-4 min-w-[200px]">
                            {isEditing ? (
                              <div className="space-y-2">
                                <input
                                  type="text"
                                  value={editingFields.title || ''}
                                  onChange={(e) => setEditingFields({ ...editingFields, title: e.target.value })}
                                  className="w-full rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                                />
                                <textarea
                                  value={editingFields.description || ''}
                                  onChange={(e) => setEditingFields({ ...editingFields, description: e.target.value })}
                                  rows={2}
                                  className="w-full rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                                />
                              </div>
                            ) : (
                              <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{lesson.title}</h4>
                                <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{lesson.description}</p>
                              </div>
                            )}
                          </td>
                          {/* Ngôn ngữ */}
                          <td className="px-6 py-4">
                            {isEditing ? (
                              <input
                                type="text"
                                value={editingFields.language || ''}
                                onChange={(e) => setEditingFields({ ...editingFields, language: e.target.value })}
                                className="w-16 rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                              />
                            ) : (
                              <span className="font-semibold">{getLanguageLabel(lesson.language)}</span>
                            )}
                          </td>
                          {/* Danh mục */}
                          <td className="px-6 py-4">
                            {isEditing ? (
                              <input
                                type="text"
                                value={editingFields.category || ''}
                                onChange={(e) => setEditingFields({ ...editingFields, category: e.target.value })}
                                className="w-28 rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                              />
                            ) : (
                              <span>{lesson.category}</span>
                            )}
                          </td>
                          {/* Độ khó */}
                          <td className="px-6 py-4">
                            {isEditing ? (
                              <select
                                value={editingFields.difficulty || ''}
                                onChange={(e) => setEditingFields({ ...editingFields, difficulty: e.target.value })}
                                className="rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                              >
                                <option value="Beginner">Beginner</option>
                                <option value="Normal">Normal</option>
                                <option value="Advanced">Advanced</option>
                              </select>
                            ) : (
                              <span className={`inline-block px-2 py-0.5 rounded-md font-bold text-[10px] ${
                                lesson.difficulty === 'Beginner' ? 'bg-green-50 text-green-600 dark:bg-green-950/20' :
                                lesson.difficulty === 'Advanced' ? 'bg-red-50 text-red-600 dark:bg-red-950/20' : 'bg-amber-50 text-amber-600 dark:bg-amber-950/20'
                              }`}>{lesson.difficulty}</span>
                            )}
                          </td>
                          {/* Bản nháp/Xuất bản */}
                          <td className="px-6 py-4">
                            {isEditing ? (
                              <select
                                value={editingFields.is_published ? 'true' : 'false'}
                                onChange={(e) => setEditingFields({ ...editingFields, is_published: e.target.value === 'true' })}
                                className="rounded-lg border border-slate-200 bg-white p-2 text-xs dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                              >
                                <option value="true">Xuất bản</option>
                                <option value="false">Bản nháp</option>
                              </select>
                            ) : (
                              <span className={`inline-flex items-center gap-1 font-semibold text-xs ${lesson.is_published ? 'text-green-500' : 'text-slate-400'}`}>
                                {lesson.is_published ? <Eye size={12} /> : <EyeOff size={12} />}
                                {lesson.is_published ? 'Hiển thị' : 'Ẩn (Nháp)'}
                              </span>
                            )}
                          </td>
                          {/* Nút hành động */}
                          <td className="px-6 py-4 text-right">
                            {isEditing ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={handleSaveEdit}
                                  className="p-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-400 transition-colors"
                                  title="Lưu lại"
                                >
                                  <Save size={14} />
                                </button>
                                <button
                                  onClick={handleCancelEdit}
                                  className="p-2 border border-slate-200 text-slate-500 rounded-xl hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
                                  title="Hủy bỏ"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleStartEdit(lesson)}
                                  className="p-2 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
                                  title="Chỉnh sửa"
                                >
                                  <Edit size={14} />
                                </button>
                                <button
                                  onClick={() => handleDeleteLesson(lesson.id)}
                                  className="p-2 border border-slate-200 text-red-500 rounded-xl hover:bg-red-50 dark:border-slate-800 dark:hover:bg-red-950/20"
                                  title="Xóa bài học"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: TẠO BÀI HỌC MỚI */}
          {activeTab === 'create' && (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-sm sm:text-base">Biên soạn bài học mới</h3>

              <form onSubmit={handleCreateLesson} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tiêu đề */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Tiêu đề bài học</label>
                    <input
                      type="text"
                      value={newLesson.title}
                      onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                      placeholder="Ví dụ: Đàm phán giá cả xây dựng"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      required
                    />
                  </div>

                  {/* Mô tả */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Mô tả bài học</label>
                    <textarea
                      value={newLesson.description}
                      onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
                      placeholder="Nhập mô tả ngắn về chủ đề và mục đích bài học..."
                      rows={2}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Ngôn ngữ */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Ngôn ngữ</label>
                    <select
                      value={newLesson.language}
                      onChange={(e) => setNewLesson({ ...newLesson, language: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="en">English (Tiếng Anh)</option>
                      <option value="vi">Vietnamese (Tiếng Việt)</option>
                      <option value="ja">Japanese (Tiếng Nhật)</option>
                      <option value="zh">Chinese (Tiếng Trung)</option>
                      <option value="ko">Korean (Tiếng Hàn)</option>
                    </select>
                  </div>

                  {/* Danh mục */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Danh mục</label>
                    <select
                      value={newLesson.category}
                      onChange={(e) => setNewLesson({ ...newLesson, category: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="Daily Conversation">Daily Conversation</option>
                      <option value="Business">Business</option>
                      <option value="Travel">Travel</option>
                      <option value="IELTS">IELTS</option>
                      <option value="Construction">Construction</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Korean">Korean</option>
                    </select>
                  </div>

                  {/* Độ khó */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Độ khó</label>
                    <select
                      value={newLesson.difficulty}
                      onChange={(e) => setNewLesson({ ...newLesson, difficulty: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Normal">Normal</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Vòng lặp mặc định */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Lặp lại mặc định (Repeat)</label>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={newLesson.repeat_default}
                      onChange={(e) => setNewLesson({ ...newLesson, repeat_default: Math.max(1, parseInt(e.target.value) || 1) })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Giọng đọc đề xuất */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Giọng đọc đề xuất (Optional)</label>
                    <input
                      type="text"
                      value={newLesson.voice}
                      onChange={(e) => setNewLesson({ ...newLesson, voice: e.target.value })}
                      placeholder="VD: Google US English"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Xuất bản hoặc Nháp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Trạng thái phát hành</label>
                    <select
                      value={newLesson.is_published ? 'true' : 'false'}
                      onChange={(e) => setNewLesson({ ...newLesson, is_published: e.target.value === 'true' })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="true">Xuất bản hiển thị ngay (Publish)</option>
                      <option value="false">Lưu tạm dưới dạng bản nháp (Draft)</option>
                    </select>
                  </div>

                  {/* Nội dung bài học */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Nội dung (Mỗi dòng là một câu)</label>
                    <textarea
                      value={newLesson.content}
                      onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
                      placeholder={`Chào mừng bạn đến với khóa học.\nChúc bạn có thời gian học vui vẻ.\nĐây là phương pháp luyện nói phản xạ shadowing.`}
                      rows={8}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-950 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="submit"
                    className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3.5 text-sm shadow-md shadow-indigo-600/10 transition-all duration-200 active:scale-95"
                  >
                    Tạo bài học mới
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: IMPORT TỪ CSV */}
          {activeTab === 'csv' && (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">Tải lên file bài học dạng CSV</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Uploader Box */}
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-3xl p-8 text-center transition-colors duration-200 bg-slate-50/30 dark:bg-slate-900/10">
                  <Upload size={36} className="mx-auto text-slate-400 mb-4 animate-bounce" />
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Chọn file CSV bài học</p>
                  <p className="text-xs text-slate-400 mt-1">Dung lượng tối đa: 5MB</p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleCsvFileChange}
                    accept=".csv"
                    className="hidden"
                  />

                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-xs font-bold dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200"
                    >
                      {csvFile ? "Đổi file khác" : "Chọn file CSV"}
                    </button>
                    {csvFile && (
                      <button
                        onClick={handleUploadCsv}
                        disabled={csvUploading}
                        className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 text-xs font-bold shadow-md shadow-indigo-600/10 transition-all duration-200"
                      >
                        {csvUploading ? "Đang upload..." : "Upload & Nhập dữ liệu"}
                      </button>
                    )}
                  </div>

                  {csvFile && (
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-4">
                      Đã chọn file: {csvFile.name} ({(csvFile.size / 1024).toFixed(1)} KB)
                    </p>
                  )}
                </div>

                {/* Instructions Box */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Hướng dẫn thiết lập cấu trúc file CSV</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Định dạng file CSV của bạn phải có dòng tiêu đề cột chính xác như sau:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-xl overflow-x-auto text-[10px] sm:text-xs font-mono text-slate-700 dark:text-slate-300">
                    title,description,language,category,difficulty,voice,repeat_default,content,is_published
                  </div>
                  
                  <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    <p>• <b>title:</b> Tên của bài luyện tập (Không được để trống).</p>
                    <p>• <b>language:</b> en, vi, ja, ko, zh (Ngôn ngữ bài viết).</p>
                    <p>• <b>difficulty:</b> Beginner, Normal, Advanced (Độ khó câu).</p>
                    <p>• <b>content:</b> Nội dung bài học. Mỗi câu ngăn cách bằng dấu gạch đứng <b>|</b> hoặc viết xuống dòng trong ô dữ liệu.</p>
                    <p>• <b>is_published:</b> true/false (Hiển thị ngay lập tức hoặc để nháp).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
