'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Bookmark, Play, BookOpen, Clock, AlertCircle } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
}

const STATIC_LESSONS_LIBRARY: Lesson[] = [
  {
    id: 1,
    title: "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
    description: "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 2,
    title: "Mẹ và bé: Đi chơi công viên | Going to the Park",
    description: "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 3,
    title: "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
    description: "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 4,
    title: "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
    description: "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 5,
    title: "Hội thoại công sở: Họp dự án | Business Meeting",
    description: "Hội thoại tiếng Anh thương mại thường gặp khi thảo luận tiến độ dự án.",
    language: "en",
    category: "Business",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 6,
    title: "Hỏi đường du lịch: Đến ga tàu | Asking for Directions",
    description: "Mẫu câu hỏi đường đi ga tàu điện ngầm cơ bản dành cho người đi du lịch.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 7,
    title: "IELTS Speaking: Cuốn sách yêu thích | Favorite Book",
    description: "Đoạn nói học thuật mô tả một cuốn sách ảnh hưởng lớn đến cuộc sống.",
    language: "en",
    category: "IELTS",
    difficulty: "Advanced",
    repeat_default: 2
  },
  {
    id: 8,
    title: "Xây dựng: Thi công bê tông & An toàn | Concrete Pouring",
    description: "Từ vựng tiếng Anh kỹ thuật thi công đổ bê tông cốt thép tại công trường.",
    language: "en",
    category: "Construction",
    difficulty: "Advanced",
    repeat_default: 3
  },
  {
    id: 9,
    title: "Tiếng Việt: Chào hỏi xã giao | Vietnamese Greetings",
    description: "Mẫu câu tiếng Việt cơ bản để chào hỏi và hỏi thăm sức khỏe hàng ngày.",
    language: "vi",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 10,
    title: "Tiếng Việt: Gọi món ăn ở nhà hàng | Ordering Food",
    description: "Giao tiếp tại quán ăn khi muốn gọi phở và các món đặc sản Việt Nam.",
    language: "vi",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 11,
    title: "Tiếng Nhật: Mua vé tàu Shinkansen | Shinkansen Ticket",
    description: "Mẫu câu hội thoại tiếng Nhật thực tế khi mua vé tàu cao tốc tại quầy.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 12,
    title: "Tiếng Nhật: Chào hỏi buổi sáng | Japanese Greetings",
    description: "Các câu giao tiếp tiếng Nhật ngắn gọn bắt đầu ngày mới.",
    language: "ja",
    category: "Japanese",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 13,
    title: "Tiếng Hàn: Tự giới thiệu bản thân | Korean Intro",
    description: "Học các câu nói tiếng Hàn cơ bản để giới thiệu tên, tuổi và nghề nghiệp.",
    language: "ko",
    category: "Korean",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 14,
    title: "Tiếng Hàn: Mua sắm ở chợ Dongdaemun | Shopping",
    description: "Hội thoại mặc cả và hỏi giá khi đi mua sắm quần áo tại Hàn Quốc.",
    language: "ko",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 15,
    title: "Tiếng Trung: Trả giá khi mua sắm | Bargaining",
    description: "Các câu nói tiếng Trung thường dùng để mặc cả giảm giá khi mua quà lưu niệm.",
    language: "zh",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 16,
    title: "Tiếng Trung: Hỏi thăm gia đình | Family Talk",
    description: "Chủ đề hỏi thăm số lượng thành viên và công việc của mọi người trong nhà.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2
  },
  {
    id: 17,
    title: "Tiếng Trung: Ký kết hợp đồng thương mại | Business",
    description: "Thoại thương mại cấp cao đàm phán ký kết hợp đồng giữa hai đối tác.",
    language: "zh",
    category: "Business",
    difficulty: "Advanced",
    repeat_default: 2
  },
  {
    id: 18,
    title: "Mẹ và bé: Tại sân bay nước ngoài | At the Airport",
    description: "Mẹ hướng dẫn bé và thực hiện các thủ tục check-in tại sân bay khi chuẩn bị đi nước ngoài.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 19,
    title: "Mẹ và bé: Trên chuyến bay | On the Airplane",
    description: "Mẹ giao tiếp với tiếp viên hàng không để xin nước ấm pha sữa và chăn đắp cho bé.",
    language: "en",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 20,
    title: "Mẹ học tiếng Nhật: Mua sữa và tã ở siêu thị | Buying Baby Milk and Diapers",
    description: "Mẫu hội thoại tiếng Nhật cho mẹ hỏi nhân viên siêu thị để tìm mua sữa công thức và tã giấy cho bé.",
    language: "ja",
    category: "Travel",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 21,
    title: "Mẹ học tiếng Hàn: Đăng ký khám bệnh cho bé | At the Pediatric Clinic",
    description: "Hội thoại tại phòng khám nhi ở Hàn Quốc khi mẹ khai báo các triệu chứng ho sốt của bé.",
    language: "ko",
    category: "Korean",
    difficulty: "Normal",
    repeat_default: 2
  },
  {
    id: 22,
    title: "Mẹ học tiếng Trung: Tìm trường mẫu giáo cho bé | Kindergarten Inquiry",
    description: "Mẹ hỏi thăm thông tin đăng ký nhập học và các chế độ ăn uống cho con tại trường mầm non.",
    language: "zh",
    category: "Daily Conversation",
    difficulty: "Advanced",
    repeat_default: 2
  },
  {
    id: 23,
    title: "Mẹ và bé: Làm quen hàng xóm mới | Meeting New Neighbors",
    description: "Mẹ hướng dẫn bé chào hỏi và giao tiếp xã giao với người hàng xóm nước ngoài thân thiện.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Normal",
    repeat_default: 2
  }
];

export default function LessonLibrary() {
  const [lessons, setLessons] = useState<Lesson[]>(STATIC_LESSONS_LIBRARY);
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Tất cả');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Tất cả');
  
  // Bookmarks và bài học trước đó
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [lastLessonId, setLastLessonId] = useState<number | null>(null);
  const [lastLesson, setLastLesson] = useState<Lesson | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Danh mục bộ lọc
  const languages = ['Tất cả', 'en', 'vi', 'ja', 'ko', 'zh'];
  const categories = ['Tất cả', 'Daily Conversation', 'Business', 'Travel', 'IELTS', 'Construction', 'Japanese', 'Korean'];
  const difficulties = ['Tất cả', 'Beginner', 'Normal', 'Advanced'];

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

  // Load Bookmarks & Last Lesson từ LocalStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('shadowflow_bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }

    const savedLastId = localStorage.getItem('shadowflow_last_lesson_id');
    if (savedLastId) {
      setLastLessonId(parseInt(savedLastId));
    }
  }, []);

  // Fetch bài học từ API
  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      try {
        // Tạo query string
        const params = new URLSearchParams();
        if (selectedLanguage !== 'Tất cả') params.append('language', selectedLanguage);
        if (selectedCategory !== 'Tất cả') params.append('category', selectedCategory);
        if (selectedDifficulty !== 'Tất cả') params.append('difficulty', selectedDifficulty);
        if (search.trim()) params.append('search', search);

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const res = await fetch(`${apiUrl}/api/lessons?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setLessons(data);
          setErrorMsg(null);
        } else {
          throw new Error();
        }
      } catch (err) {
        console.log("Offline mode: Sử dụng bộ lọc client side.");
        // Bộ lọc offline trên Client Side
        let filtered = STATIC_LESSONS_LIBRARY;
        if (selectedLanguage !== 'Tất cả') {
          filtered = filtered.filter(l => l.language.toLowerCase() === selectedLanguage.toLowerCase());
        }
        if (selectedCategory !== 'Tất cả') {
          filtered = filtered.filter(l => l.category === selectedCategory);
        }
        if (selectedDifficulty !== 'Tất cả') {
          filtered = filtered.filter(l => l.difficulty === selectedDifficulty);
        }
        if (search.trim()) {
          const s = search.toLowerCase();
          filtered = filtered.filter(l => 
            l.title.toLowerCase().includes(s) || 
            l.description.toLowerCase().includes(s)
          );
        }
        setLessons(filtered);
        setErrorMsg("Đang chạy ở chế độ ngoại tuyến. Kết quả hiển thị từ thư viện cục bộ.");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [selectedLanguage, selectedCategory, selectedDifficulty, search]);

  // Tìm thông tin bài học gần nhất để làm banner gợi ý
  useEffect(() => {
    if (lastLessonId) {
      const found = lessons.find(l => l.id === lastLessonId) || STATIC_LESSONS_LIBRARY.find(l => l.id === lastLessonId);
      if (found) {
        setLastLesson(found);
      }
    }
  }, [lastLessonId, lessons]);

  // Toggle Bookmark
  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let updated: number[];
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter(bId => bId !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    localStorage.setItem('shadowflow_bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <main className="flex-grow mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner Bài học trước đó (Continue last lesson) */}
        {lastLesson && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-5 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 dark:border-indigo-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Tiếp tục luyện tập</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{lastLesson.title}</h4>
              </div>
            </div>
            <Link
              href={`/practice?lesson_id=${lastLesson.id}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 text-xs shadow-md shadow-indigo-600/10 active:scale-95 transition-all duration-200"
            >
              Luyện tiếp <Play size={10} fill="currentColor" />
            </Link>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR BỘ LỌC (Desktop) */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="glass-panel p-6 rounded-3xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Filter size={16} className="text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Bộ lọc bài học</h3>
              </div>

              {/* Lọc ngôn ngữ */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ngôn ngữ</label>
                <div className="space-y-1">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                        selectedLanguage === lang
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900'
                      }`}
                    >
                      {lang === 'Tất cả' ? 'Tất cả ngôn ngữ' : getLanguageLabel(lang)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lọc danh mục */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Danh mục</label>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                        selectedCategory === cat
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900'
                      }`}
                    >
                      {cat === 'Tất cả' ? 'Tất cả danh mục' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lọc độ khó */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Độ khó</label>
                <div className="space-y-1">
                  {difficulties.map(diff => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                        selectedDifficulty === diff
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900'
                      }`}
                    >
                      {diff === 'Tất cả' ? 'Tất cả độ khó' : diff}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* DANH SÁCH BÀI HỌC */}
          <div className="flex-1 space-y-6">
            
            {/* Thanh tìm kiếm & Trạng thái offline */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
              <div className="relative w-full sm:max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm kiếm tiêu đề hoặc nội dung bài học..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-950 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white transition-all duration-200"
                />
              </div>
              <div className="text-xs font-semibold text-slate-400">
                Tìm thấy {lessons.length} bài học
              </div>
            </div>

            {errorMsg && (
              <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/50 p-4 flex items-start gap-2.5 text-xs text-amber-700 dark:text-amber-400 font-semibold">
                <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Grid bài học */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-52 rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                ))}
              </div>
            ) : lessons.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-3xl">
                <BookOpen size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Không tìm thấy bài học</h3>
                <p className="text-sm text-slate-500 mt-1">Vui lòng thay đổi từ khóa hoặc bộ lọc để thử lại.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {lessons.map((lesson) => {
                    const isBookmarked = bookmarks.includes(lesson.id);
                    return (
                      <motion.div
                        key={lesson.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-900/60 transition-all duration-300 group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="inline-block rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 text-[10px] font-bold">
                                {getLanguageLabel(lesson.language)}
                              </span>
                              <span className="inline-block rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 text-[10px] font-bold">
                                {lesson.category}
                              </span>
                            </div>
                            
                            {/* Bookmark Button */}
                            <button
                              onClick={(e) => toggleBookmark(lesson.id, e)}
                              className={`p-2 rounded-xl border transition-all duration-200 active:scale-90 ${
                                isBookmarked
                                  ? 'bg-amber-50 border-amber-200 text-amber-500 dark:bg-amber-950/30 dark:border-amber-900/50'
                                  : 'border-slate-200 text-slate-400 hover:text-slate-600 dark:border-slate-800 dark:hover:text-slate-200'
                              }`}
                            >
                              <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
                            </button>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                            {lesson.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                            {lesson.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-400">Độ khó: 
                            <span className={`ml-1 font-bold ${
                              lesson.difficulty === 'Beginner' ? 'text-green-500' :
                              lesson.difficulty === 'Advanced' ? 'text-red-500' : 'text-amber-500'
                            }`}>{lesson.difficulty}</span>
                          </span>
                          <Link
                            href={`/practice?lesson_id=${lesson.id}`}
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 group-hover:bg-indigo-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/10 active:scale-95 transition-all duration-200"
                          >
                            Luyện tập <Play size={8} fill="currentColor" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  );
}
