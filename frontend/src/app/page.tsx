'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Play, Sparkles, BookOpen, ChevronRight, CheckCircle2, Mic, Volume2, Settings2 } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
}

const FALLBACK_FEATURED_LESSONS: Lesson[] = [
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
  }
];

export default function Home() {
  const [featuredLessons, setFeaturedLessons] = useState<Lesson[]>(FALLBACK_FEATURED_LESSONS);
  const [customText, setCustomText] = useState('');
  const [loadingLessons, setLoadingLessons] = useState(true);

  // Lấy các bài học từ API
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/lessons?limit=3');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setFeaturedLessons(data);
          }
        }
      } catch (err) {
        console.log("Không thể kết nối đến backend API. Sử dụng dữ liệu dự phòng.");
      } finally {
        setLoadingLessons(false);
      }
    };
    fetchLessons();
  }, []);

  const handleStartCustom = (e: React.FormEvent) => {
    if (!customText.trim()) return;
    // Lưu văn bản tạm vào localStorage để trang practice đọc
    localStorage.setItem('shadowflow_custom_text', customText);
  };

  const getLanguageLabel = (code: string) => {
    switch (code.toLowerCase()) {
      case 'en': return 'Tiếng Anh';
      case 'vi': return 'Tiếng Việt';
      case 'ja': return 'Tiếng Nhật';
      case 'ko': return 'Tiếng Hàn';
      case 'zh': return 'Tiếng Trung';
      default: return 'Khác';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50/40 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-600/10"></div>
          <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-600/10"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/40 dark:border-indigo-900/50 dark:text-indigo-400 mb-6"
            >
              <Sparkles size={13} className="animate-spin" /> Luyện Shadowing với Trợ lý AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Phát Âm Tự Nhiên Hơn Với <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                ShadowFlow AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400"
            >
              Phương pháp phản xạ Shadowing giúp bạn nói trôi chảy ngoại ngữ. Nghe trợ lý AI phát âm từng câu, đọc theo ngay lập tức và tự động chuyển câu tiếp theo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/practice"
                className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-600/30 active:scale-95 transition-all duration-200"
              >
                <Play size={18} fill="currentColor" /> Tự luyện nói ngay
              </Link>
              <Link
                href="/lessons"
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white active:scale-95 transition-all duration-200"
              >
                <BookOpen size={18} /> Thư viện bài học
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid & Custom Paste area */}
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side: Custom Paste Text Box */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-100/50 dark:shadow-none"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Luyện Tập Tùy Chỉnh (Custom)
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Dán bất kỳ đoạn văn bản nào bạn muốn luyện tập dưới đây. Mỗi dòng sẽ tự động được coi là một câu để đọc.
                </p>

                <form onSubmit={handleStartCustom}>
                  <div className="relative mb-6">
                    <textarea
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder={`Ví dụ:\nBuilding trust through every project\nStrong solutions for construction\nCustom steel formwork delivered\nDesigned precisely for projects`}
                      rows={6}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-all duration-200"
                      required
                    />
                  </div>

                  <Link
                    href={customText.trim() ? "/practice?mode=custom" : "#"}
                    onClick={(e) => {
                      if (!customText.trim()) {
                        e.preventDefault();
                        return;
                      }
                      handleStartCustom(e);
                    }}
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 shadow-md ${
                      customText.trim()
                        ? 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600/10 active:scale-98'
                        : 'bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-600 cursor-not-allowed'
                    }`}
                  >
                    Bắt đầu Shadowing đoạn văn bản này <ChevronRight size={16} />
                  </Link>
                </form>
              </motion.div>

              {/* Right Side: Core features list */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8 lg:pl-6"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Phương pháp thông minh giúp cải thiện phát âm
                  </h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    ShadowFlow tối ưu hóa từng chi tiết nhỏ nhất nhằm mang lại hiệu quả tập trung cao độ khi luyện shadowing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <Mic size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Hỗ trợ đa ngôn ngữ</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Anh, Việt, Nhật, Hàn, Trung... Học bất kỳ ngôn ngữ nào được trình duyệt của bạn hỗ trợ.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <Volume2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Tự động ngắt nghỉ</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Cơ chế tính khoảng thời gian trống thông minh dựa theo độ dài câu và độ khó (mức ngắt nghỉ) bạn chọn.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <Settings2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Tùy biến tốc độ đọc</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Điều chỉnh tốc độ phát âm linh hoạt từ 0.5x (học từ vựng) lên đến 2.0x (luyện phản xạ nhanh).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Thiết kế tối ưu di động</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Nút bấm to rõ ràng, các bảng cài đặt trượt mở mượt mà để luyện shadowing mọi lúc mọi nơi trên điện thoại.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Built-In Lessons */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Bài học nổi bật từ thư viện
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  Chọn các bài luyện mẫu được biên soạn kỹ càng theo từng chủ đề thông dụng.
                </p>
              </div>
              <Link
                href="/lessons"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
              >
                Xem tất cả bài học <ChevronRight size={16} />
              </Link>
            </div>

            {loadingLessons ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-56 rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredLessons.map((lesson, idx) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-lg shadow-slate-100/30 dark:shadow-none hover:border-indigo-300 dark:hover:border-indigo-900/60 transition-all duration-300 group"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-block rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 text-xs font-semibold">
                        {getLanguageLabel(lesson.language)}
                      </span>
                      <span className="inline-block rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 text-xs font-semibold">
                        {lesson.category}
                      </span>
                      <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${
                        lesson.difficulty === 'Beginner'
                          ? 'bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400'
                          : lesson.difficulty === 'Advanced'
                          ? 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400'
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                      }`}>
                        {lesson.difficulty}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex-grow line-clamp-3">
                      {lesson.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Lặp lại mặc định: {lesson.repeat_default} lần</span>
                      <Link
                        href={`/practice?lesson_id=${lesson.id}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 group-hover:bg-indigo-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/10 active:scale-95 transition-all duration-200"
                      >
                        Luyện tập <Play size={10} fill="currentColor" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/lessons"
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              >
                Xem tất cả bài học <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 ShadowFlow AI. Được thiết kế tối ưu hóa trải nghiệm học tập và phản xạ nói ngoại ngữ.
          </p>
        </div>
      </footer>
    </div>
  );
}
