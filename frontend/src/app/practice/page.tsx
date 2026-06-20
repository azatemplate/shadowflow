'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useSpeechSynthesis, PlayerState, PauseMode, PausePreset } from '@/hooks/useSpeechSynthesis';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, ChevronLeft, ChevronRight, 
  Settings, List, Volume2, Info, CheckCircle2, Languages, Clock, HelpCircle
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  category: string;
  difficulty: string;
  repeat_default: number;
  content: string;
}

const FALLBACK_LESSONS: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Mẹ và bé: Mặc quần áo buổi sáng | Getting Dressed",
    description: "Đoạn hội thoại ngắn giữa mẹ và bé khi chuẩn bị quần áo để bắt đầu ngày mới.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Wake up, sweetheart! It is time to get dressed. | Mẹ: Dậy đi con yêu! Đến lúc mặc quần áo rồi.\nBaby: Good morning, mommy. I am still sleepy. | Con: Chào buổi sáng mẹ. Con vẫn còn buồn ngủ lắm.\nMother: Let us put on your favorite blue shirt today. | Mẹ: Hôm nay chúng ta mặc chiếc áo sơ mi màu xanh yêu thích của con nhé.\nBaby: Yes! And I want to wear my red shorts too. | Con: Vâng ạ! Và con cũng muốn mặc chiếc quần đùi màu đỏ nữa.\nMother: Great choice! Put your arms through the sleeves first. | Mẹ: Lựa chọn tuyệt vời! Xỏ tay qua ống tay áo trước nào con.\nBaby: Like this, mommy? I did it by myself! | Con: Thế này hả mẹ? Con tự làm được rồi này!\nMother: Yes, just like that. You are doing a wonderful job! | Mẹ: Đúng rồi, chính thế. Con làm tốt lắm!"
  },
  2: {
    id: 2,
    title: "Mẹ và bé: Đi chơi công viên | Going to the Park",
    description: "Hội thoại tiếng Anh thông dụng khi mẹ chuẩn bị cho bé đi chơi công viên.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Do you want to go to the park with me? | Mẹ: Con có muốn đi chơi công viên với mẹ không?\nBaby: Yay! I want to play on the slide and swing. | Con: Dê! Con muốn chơi cầu trượt và xích đu.\nMother: Put on your shoes and grab your water bottle. | Mẹ: Hãy đi giày vào và mang theo bình nước của con nhé.\nBaby: Where is my sun hat, mommy? | Con: Mũ che nắng của con đâu rồi hả mẹ?\nMother: It is on the table near the door. Let us go! | Mẹ: Nó ở trên bàn gần cửa ra vào ấy. Đi thôi con!\nBaby: Look, mommy! There are many beautiful butterflies. | Con: Nhìn kìa mẹ! Có rất nhiều bươm bướm xinh đẹp.\nMother: Yes, they are. Stay close to me, okay? | Mẹ: Đúng vậy. Hãy đi gần mẹ nhé, được không?"
  },
  3: {
    id: 3,
    title: "Mẹ và bé: Dọn dẹp đồ chơi | Tidying Up Toys",
    description: "Mẹ hướng dẫn bé cách cất đồ chơi gọn gàng sau khi chơi xong.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: We finished playing. Now it is time to tidy up. | Mẹ: Chúng ta chơi xong rồi. Bây giờ đến lúc dọn dẹp thôi.\nBaby: But mommy, I want to keep playing with my blocks. | Con: Nhưng mẹ ơi, con vẫn muốn chơi với các khối hình.\nMother: We can play again tomorrow. Let us put them in the box. | Mẹ: Ngày mai chúng ta lại chơi tiếp nhé. Cùng cất chúng vào hộp nào.\nBaby: Can you help me pick up the toy cars, please? | Con: Mẹ có thể giúp con nhặt mấy chiếc ô tô đồ chơi được không ạ?\nMother: Of course! I will collect the cars, and you collect the blocks. | Mẹ: Tất nhiên rồi! Mẹ sẽ nhặt ô tô, còn con nhặt các khối hình nhé.\nBaby: Look! The room is clean and tidy now. | Con: Nhìn kìa mẹ! Căn phòng bây giờ đã sạch sẽ và ngăn nắp rồi.\nMother: High five! Thank you for being such a good helper. | Mẹ: Đập tay nào! Cảm ơn con vì đã là một người giúp việc ngoan."
  },
  4: {
    id: 4,
    title: "Mẹ và bé: Đánh răng trước khi ngủ | Brushing Teeth",
    description: "Hội thoại vui vẻ giúp bé tạo thói quen đánh răng sạch sẽ trước khi đi ngủ.",
    language: "en",
    category: "Daily Conversation",
    difficulty: "Beginner",
    repeat_default: 2,
    content: "Mother: Brush, brush, brush your teeth! Time to clean them up. | Mẹ: Chải chải chải răng nào! Đến lúc làm sạch răng rồi.\nBaby: My toothbrush has a little dinosaur on it! | Con: Bàn chải đánh răng của con có hình một chú khủng long nhỏ này!\nMother: Put a little toothpaste on it, just like a pea. | Mẹ: Bôi một ít kem đánh răng lên nhé, chỉ bằng hạt đậu thôi.\nBaby: Like this, mommy? It smells like strawberries! | Con: Thế này hả mẹ? Nó có mùi dâu tây thơm quá!\nMother: Yes. Now brush up and down, and round and round. | Mẹ: Đúng rồi. Giờ chải lên chải xuống, và chải vòng tròn nhé.\nBaby: I am spitting out the water now. Spit! | Con: Con đang nhổ nước ra đây ạ. Nhổ!\nMother: Good job! Your teeth are shining and clean now. | Mẹ: Làm tốt lắm! Răng của con bây giờ đã sáng bóng và sạch sẽ rồi."
  }
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

function PracticeArenaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const lessonIdParam = searchParams.get('lesson_id');
  const modeParam = searchParams.get('mode');

  // Cấu hình Shadowing
  const [language, setLanguage] = useState('en');
  const [voiceName, setVoiceName] = useState('');
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [repeatLimit, setRepeatLimit] = useState(3);
  const [pauseMode, setPauseMode] = useState<PauseMode>('auto');
  const [pausePreset, setPausePreset] = useState<PausePreset>('normal');
  const [manualPauseSeconds, setManualPauseSeconds] = useState(3);

  // Giao diện
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [lessonInfo, setLessonInfo] = useState<Lesson | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hook quản lý TTS & State Machine
  const {
    sentences,
    currentIndex,
    currentLoop,
    playerState,
    voices,
    countdown,
    totalPauseDuration,
    start,
    pause,
    resume,
    stop,
    next,
    prev,
    repeatCurrent,
    jumpTo
  } = useSpeechSynthesis({
    language,
    voiceName,
    playbackSpeed,
    repeatLimit,
    pauseMode,
    pausePreset,
    manualPauseSeconds
  }, async (stats) => {
    // Khi hoàn thành bài học, gửi log lên API
    try {
      const lesson_id = lessonIdParam ? parseInt(lessonIdParam) : null;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      await fetch(`${apiUrl}/api/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_id,
          language,
          sentences_count: stats.sentencesCount,
          loops_count: stats.loopsCount,
          duration_seconds: stats.durationSeconds
        })
      });
      showToast("Ghi nhận phiên luyện tập thành công!");
    } catch (e) {
      console.log("Không thể lưu lịch sử luyện tập lên backend.");
      showToast("Hoàn thành! (Offline Mode - Chưa lưu lịch sử)");
    }
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Tải dữ liệu bài học (từ API hoặc Fallback hoặc LocalStorage)
  useEffect(() => {
    const loadData = async () => {
      if (modeParam === 'custom') {
        const storedText = localStorage.getItem('shadowflow_custom_text');
        const textToUse = storedText || "Building trust through every\nStrong solutions for construction\nCustom steel formwork delivered\nDesigned precisely for projects";
        
        const lines = textToUse.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        
        setLessonInfo({
          id: 0,
          title: "Văn bản tự nhập",
          description: "Luyện tập theo văn bản do bạn tự soạn thảo.",
          language: "en",
          category: "Custom",
          difficulty: "Normal",
          repeat_default: 3,
          content: textToUse
        });
        
        // Tự động nhận diện ngôn ngữ cơ bản (Mặc định English)
        setLanguage('en');
        start(lines);
      } else if (lessonIdParam) {
        const id = parseInt(lessonIdParam);
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
          const res = await fetch(`${apiUrl}/api/lessons/${id}`);
          if (res.ok) {
            const data = await res.json();
            setLessonInfo(data);
            setLanguage(data.language);
            setRepeatLimit(data.repeat_default);
            
            const lines = data.content.split('\n').map((s: string) => s.trim()).filter((s: string) => s.length > 0);
            start(lines);
            
            // Lưu bài học gần nhất để tiếp tục học sau
            localStorage.setItem('shadowflow_last_lesson_id', id.toString());
          } else {
            throw new Error();
          }
        } catch (e) {
          // Fallback nếu không có mạng
          const fallback = FALLBACK_LESSONS[id] || FALLBACK_LESSONS[1];
          setLessonInfo(fallback);
          setLanguage(fallback.language);
          setRepeatLimit(fallback.repeat_default);
          const lines = fallback.content.split('\n').map(s => s.trim()).filter(s => s.length > 0);
          start(lines);
          showToast("Sử dụng bài học dự phòng (Offline Mode)");
        }
      } else {
        // Mặc định nạp câu trống hoặc hướng dẫn nếu truy cập trực tiếp
        const welcomeText = "Chào mừng bạn đến với ShadowFlow!\nHãy nhấp vào Danh sách bài học để chọn chủ đề.\nHoặc dán văn bản của bạn ở trang chủ.\nChúc bạn luyện nói tự nhiên và trôi chảy!";
        setLessonInfo({
          id: 0,
          title: "Hướng dẫn cơ bản",
          description: "Luyện tập thử các câu cơ bản.",
          language: "vi",
          category: "Tutorial",
          difficulty: "Beginner",
          repeat_default: 1,
          content: welcomeText
        });
        setLanguage('vi');
        const lines = welcomeText.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        start(lines);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonIdParam, modeParam]);

  // Phím tắt Keyboard (Phím cách: Play/Pause, Mũi tên trái/phải: câu trước/sau, R: Đọc lại câu hiện tại)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bỏ qua nếu đang gõ chữ trong input/textarea
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        if (playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW') {
          pause();
        } else if (playerState === 'PAUSED_AUDIO' || playerState === 'PAUSED_SHADOW') {
          resume();
        } else if (playerState === 'IDLE' || playerState === 'COMPLETED') {
          const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
          start(lines);
        }
      } else if (e.code === 'ArrowRight') {
        next();
      } else if (e.code === 'ArrowLeft') {
        prev();
      } else if (e.key.toLowerCase() === 'r') {
        repeatCurrent();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerState, lessonInfo, pause, resume, start, next, prev, repeatCurrent]);

  // Bộ lọc danh sách giọng đọc theo ngôn ngữ chọn
  const filteredVoices = voices.filter(voice => {
    if (language === 'Auto Detect' || language === 'Other') return true;
    // So khớp mã ngôn ngữ (ví dụ 'en-US' khớp với 'en')
    return voice.lang.toLowerCase().startsWith(language.toLowerCase()) ||
           language.toLowerCase().startsWith(voice.lang.toLowerCase());
  });

  // Tăng/giảm tốc độ nhanh qua vòng lặp [0.7, 0.8, 1.0, 1.2, 1.5]
  const cycleSpeed = () => {
    const speeds = [0.7, 0.8, 1.0, 1.2, 1.5];
    const currentIndexSpeed = speeds.indexOf(playbackSpeed);
    const nextIndexSpeed = currentIndexSpeed !== -1 ? (currentIndexSpeed + 1) % speeds.length : 2;
    const newSpeed = speeds[nextIndexSpeed];
    setPlaybackSpeed(newSpeed);
    
    // Nếu đang phát âm, lập tức đọc lại câu với tốc độ mới
    if (playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW' || playerState === 'PAUSED_AUDIO') {
      setTimeout(() => {
        repeatCurrent();
      }, 50);
    }
  };

  // Tự động gán giọng mặc định khi thay đổi ngôn ngữ lọc
  useEffect(() => {
    if (filteredVoices.length > 0) {
      // Tìm giọng đọc tiếng Việt nếu là tiếng Việt, hoặc giọng mặc định hệ thống
      const defaultVoice = filteredVoices.find(v => v.default) || filteredVoices[0];
      setVoiceName(defaultVoice.name);
    } else {
      setVoiceName('');
    }
  }, [language, voices]); // eslint-disable-line react-hooks/exhaustive-deps

  // Render thanh đếm ngược trong thời gian nghỉ
  const renderCountdownTracker = () => {
    if (playerState !== 'WAITING_SHADOW' && playerState !== 'PAUSED_SHADOW') return null;

    const percent = totalPauseDuration > 0 ? (countdown / totalPauseDuration) * 100 : 0;

    return (
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold dark:text-red-400 flex items-center gap-1.5 animate-pulse">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span> Đọc theo ngay...
        </span>
        {/* Thanh đếm ngược dạng ngang (Dễ nhìn trên mobile) */}
        <div className="w-64 sm:w-80 h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-100 ease-linear shadow-lg"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{countdown.toFixed(1)}s / {totalPauseDuration.toFixed(1)}s</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Main Arena Content */}
      <div className="flex-grow flex relative overflow-hidden h-[calc(100vh-4rem)]">
        
        {/* Toast thông báo */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl bg-slate-900/90 text-white px-5 py-3 text-sm font-semibold shadow-xl border border-slate-700/50 backdrop-blur-md flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-green-400" /> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. LEFT PANEL: DANH SÁCH CÂU (Desktop: Sidebar, Mobile: Drawer) */}
        <div className="hidden lg:block w-80 border-r border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <List size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Danh sách câu nói ({sentences.length})</h3>
          </div>
          <div className="space-y-2">
            {sentences.map((sentence, idx) => (
              <button
                key={idx}
                onClick={() => jumpTo(idx)}
                className={`w-full text-left p-3.5 rounded-2xl text-sm transition-all duration-200 border ${
                  idx === currentIndex
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/50 dark:text-indigo-300 font-semibold'
                    : idx < currentIndex
                    ? 'bg-slate-50/50 border-transparent text-slate-400 dark:bg-slate-900/20 dark:text-slate-600 line-through'
                    : 'bg-white border-slate-100 hover:border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex gap-2.5">
                  <span className={`text-xs font-mono flex h-5 w-5 items-center justify-center rounded-lg border ${
                    idx === currentIndex
                      ? 'border-indigo-300 text-indigo-600 bg-indigo-100/50 dark:border-indigo-800 dark:text-indigo-400 dark:bg-indigo-900/20'
                      : 'border-slate-200 text-slate-400 dark:border-slate-800 dark:text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="flex-1 line-clamp-2">
                    {sentence.includes('|') ? sentence.split('|')[0].trim() : sentence}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* LEFT DRAWER (Mobile) */}
        <AnimatePresence>
          {isLeftDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLeftDrawerOpen(false)}
                className="lg:hidden absolute inset-0 z-40 bg-slate-950"
              />
              {/* Content sheet */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="lg:hidden absolute left-0 top-0 bottom-0 z-50 w-72 bg-white dark:bg-slate-900 p-6 overflow-y-auto border-r border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <List size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Danh sách câu</h3>
                  </div>
                  <button 
                    onClick={() => setIsLeftDrawerOpen(false)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold"
                  >
                    Đóng
                  </button>
                </div>
                <div className="space-y-2">
                  {sentences.map((sentence, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        jumpTo(idx);
                        setIsLeftDrawerOpen(false);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl text-sm transition-all duration-200 border ${
                        idx === currentIndex
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/50 dark:text-indigo-300 font-semibold shadow-sm'
                          : idx < currentIndex
                          ? 'bg-slate-50/50 border-transparent text-slate-400 dark:bg-slate-900/20 dark:text-slate-600 line-through'
                          : 'bg-white border-slate-100 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex gap-2.5">
                        <span className="text-xs font-mono flex h-5 w-5 items-center justify-center rounded-lg border border-slate-200 text-slate-400 dark:border-slate-800 dark:text-slate-600">
                          {idx + 1}
                        </span>
                        <span className="flex-1">
                          {sentence.includes('|') ? sentence.split('|')[0].trim() : sentence}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


        {/* 2. CENTER PANEL: FOCUS ARENA (Câu hiện tại, Trạng thái & Countdown) */}
        <div className="flex-grow flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative">
          
          {/* Top Panel Actions (Mobile toggle list and settings) */}
          <div className="flex items-center justify-between w-full lg:hidden mb-6">
            <button
              onClick={() => setIsLeftDrawerOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-sm"
            >
              <List size={14} /> Danh sách câu
            </button>

            <button
              onClick={() => setIsRightDrawerOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-sm"
            >
              <Settings size={14} /> Cài đặt
            </button>
          </div>

          {/* Practice Meta (Tiêu đề, Vòng lặp, Số câu) */}
          <div className="w-full text-center lg:text-left mb-6">
            <span className="inline-block rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 text-xs font-semibold mb-2">
              {lessonInfo?.title || "Tự luyện tập"}
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
              <span className="flex items-center gap-1.5">
                <Languages size={13} /> {getLanguageLabel(language)}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                Câu: {sentences.length > 0 ? currentIndex + 1 : 0} / {sentences.length}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                Vòng lặp: {currentLoop} / {repeatLimit}
              </span>
            </div>
            
            {/* Thanh tiến trình Realtime */}
            <div className="w-full h-1 bg-slate-100 dark:bg-slate-900 mt-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
                style={{ width: `${sentences.length > 0 ? ((currentIndex + 1) / sentences.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Focus Board Center (Hiển thị chữ) */}
          <div className="flex-1 flex flex-col items-center justify-center py-8">
            <div className="max-w-3xl w-full text-center select-none px-4">
              <AnimatePresence mode="wait">
                {playerState === 'COMPLETED' ? (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-8 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40"
                  >
                    <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-inner">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Hoàn thành Shadowing!</h2>
                    <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                      Bạn đã hoàn thành xuất sắc {sentences.length} câu nói qua {repeatLimit} vòng lặp.
                    </p>
                    <button
                      onClick={() => {
                        const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
                        start(lines);
                      }}
                      className="mt-6 flex items-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-95 shadow-md shadow-indigo-500/10"
                    >
                      <RotateCcw size={14} /> Luyện lại bài này
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Câu đang phát âm */}
                    <div className="space-y-3">
                      <p className={`font-bold tracking-tight transition-all duration-300 ${
                        playerState === 'PLAYING_AUDIO' 
                          ? 'text-indigo-600 dark:text-indigo-400 text-2xl sm:text-4xl md:text-5xl leading-tight'
                          : playerState === 'WAITING_SHADOW' || playerState === 'PAUSED_SHADOW'
                          ? 'text-red-500 dark:text-red-400 text-2xl sm:text-4xl md:text-5xl leading-tight'
                          : 'text-slate-800 dark:text-slate-100 text-xl sm:text-3xl md:text-4xl leading-tight'
                      }`}>
                        {sentences[currentIndex]?.includes('|') 
                          ? sentences[currentIndex].split('|')[0].trim() 
                          : sentences[currentIndex] || "Đang chuẩn bị âm thanh..."}
                      </p>
                      
                      {sentences[currentIndex]?.includes('|') && (
                        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium">
                          {sentences[currentIndex].split('|')[1].trim()}
                        </p>
                      )}
                    </div>

                    {/* Câu tiếp theo gợi ý nhỏ phía dưới */}
                    {currentIndex + 1 < sentences.length && (
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-600 italic mt-6">
                        Câu tiếp theo: {sentences[currentIndex + 1]?.includes('|') ? sentences[currentIndex + 1].split('|')[0].trim() : sentences[currentIndex + 1]}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hướng dẫn đếm ngược Shadowing */}
              {renderCountdownTracker()}
            </div>
          </div>

          {/* Bottom Player: Bảng điều khiển chính (Tập trung tối đa cho Touch trên di động) */}
          <div className="w-full glass-panel p-4 sm:p-5 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-start">
              {/* Nút Prev */}
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Câu trước (Mũi tên trái)"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Nút Repeat Current */}
              <button
                onClick={repeatCurrent}
                disabled={playerState === 'IDLE' || playerState === 'COMPLETED'}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Đọc lại câu này (Phím R)"
              >
                <RotateCcw size={16} />
              </button>

              {/* Nút chỉnh tốc độ nhanh */}
              <button
                onClick={cycleSpeed}
                className="flex h-12 px-3.5 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-indigo-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-indigo-400 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Nhấp để thay đổi tốc độ đọc nhanh"
              >
                {playbackSpeed}x
              </button>
            </div>

            {/* Cụm nút Play / Pause / Resume / Stop */}
            <div className="flex items-center gap-3">
              {playerState === 'PLAYING_AUDIO' || playerState === 'WAITING_SHADOW' ? (
                <button
                  onClick={pause}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Pause size={18} fill="currentColor" /> Tạm dừng
                </button>
              ) : playerState === 'PAUSED_AUDIO' || playerState === 'PAUSED_SHADOW' ? (
                <button
                  onClick={resume}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Play size={18} fill="currentColor" /> Tiếp tục
                </button>
              ) : (
                <button
                  onClick={() => {
                    const lines = lessonInfo?.content.split('\n').map(s => s.trim()).filter(s => s.length > 0) || [];
                    start(lines);
                  }}
                  className="flex h-14 w-28 sm:w-36 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-md shadow-indigo-500/10 transition-all duration-200 active:scale-95"
                >
                  <Play size={18} fill="currentColor" /> Bắt đầu
                </button>
              )}

              <button
                onClick={stop}
                disabled={playerState === 'IDLE'}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Dừng hẳn"
              >
                <span className="h-4 w-4 bg-slate-900 dark:bg-slate-100 rounded-sm" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
              {/* Phím tắt hiển thị trợ giúp */}
              <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 px-2 py-1 rounded-lg">
                <Clock size={10} /> Keyboard Shortcuts: Space, R, Arrow Keys
              </div>

              {/* Nút Next */}
              <button
                onClick={next}
                disabled={currentIndex === sentences.length - 1}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                title="Câu tiếp (Mũi tên phải)"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. RIGHT PANEL: CÀI ĐẶT SHADOWING (Desktop: Sidebar, Mobile: Drawer) */}
        <div className="hidden lg:block w-80 border-l border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <Settings size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Cấu hình Shadowing</h3>
          </div>

          <div className="space-y-6">
            {/* Lọc ngôn ngữ */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Ngôn ngữ nguồn</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                <option value="en">English (Tiếng Anh)</option>
                <option value="vi">Vietnamese (Tiếng Việt)</option>
                <option value="ja">Japanese (Tiếng Nhật)</option>
                <option value="zh">Chinese (Tiếng Trung)</option>
                <option value="ko">Korean (Tiếng Hàn)</option>
                <option value="Auto Detect">Tự phát hiện (Auto)</option>
              </select>
            </div>

            {/* Chọn giọng AI */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Giọng đọc đề xuất</label>
              <select
                value={voiceName}
                onChange={(e) => setVoiceName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                disabled={filteredVoices.length === 0}
              >
                {filteredVoices.length === 0 ? (
                  <option value="">Không tìm thấy giọng thích hợp</option>
                ) : (
                  filteredVoices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))
                )}
              </select>
              {filteredVoices.length === 0 && (
                <div className="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-[10px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                  ⚠️ Không tìm thấy giọng đọc {getLanguageLabel(language)} cài sẵn trên thiết bị. Trình duyệt sẽ tự động gọi giọng đọc trực tuyến của hệ thống. Khuyên dùng Chrome/Edge hoặc cài thêm giọng nói trong Windows Settings (Time & Language &gt; Speech).
                </div>
              )}
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Info size={10} /> Giọng đọc lấy từ hệ thống máy tính của bạn.
              </p>
            </div>

            {/* Tốc độ phát Speed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide dark:text-slate-400">Tốc độ phát âm</label>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-lg">{playbackSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 dark:accent-indigo-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0.5x (Chậm)</span>
                <span>1.0x (Chuẩn)</span>
                <span>2.0x (Nhanh)</span>
              </div>
            </div>

            {/* Lặp lại */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Số vòng lặp (Repeat)</label>
              <input
                type="number"
                min="1"
                max="99"
                value={repeatLimit}
                onChange={(e) => setRepeatLimit(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </div>

            {/* Chế độ tạm dừng */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Chế độ tạm dừng (Pause Mode)</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                <button
                  onClick={() => setPauseMode('auto')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    pauseMode === 'auto'
                      ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  Tự động (Auto)
                </button>
                <button
                  onClick={() => setPauseMode('manual')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    pauseMode === 'manual'
                      ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  Thủ công (Manual)
                </button>
              </div>
            </div>

            {/* Chi tiết cho Tự động */}
            {pauseMode === 'auto' ? (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Preset thời gian nghỉ</label>
                <select
                  value={pausePreset}
                  onChange={(e) => setPausePreset(e.target.value as PausePreset)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                >
                  <option value="beginner">Beginner (Học viên - Hệ số 0.8)</option>
                  <option value="normal">Normal (Bình thường - Hệ số 0.5)</option>
                  <option value="advanced">Advanced (Nâng cao - Hệ số 0.35)</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-2">
                  * Hệ số nhân với số từ. Giới hạn tự động tối thiểu 2 giây và tối đa 8 giây mỗi câu.
                </p>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">Thời gian nghỉ mỗi câu (giây)</label>
                <input
                  type="number"
                  min="2"
                  max="30"
                  value={manualPauseSeconds}
                  onChange={(e) => setManualPauseSeconds(Math.max(2, Math.min(30, parseInt(e.target.value) || 2)))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT DRAWER (Mobile) */}
        <AnimatePresence>
          {isRightDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsRightDrawerOpen(false)}
                className="lg:hidden absolute inset-0 z-40 bg-slate-950"
              />
              {/* Content sheet */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="lg:hidden absolute right-0 top-0 bottom-0 z-50 w-72 bg-white dark:bg-slate-900 p-6 overflow-y-auto border-l border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Settings size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Cài đặt</h3>
                  </div>
                  <button 
                    onClick={() => setIsRightDrawerOpen(false)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold"
                  >
                    Đóng
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Lọc ngôn ngữ */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Ngôn ngữ</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="en">English (Tiếng Anh)</option>
                      <option value="vi">Vietnamese (Tiếng Việt)</option>
                      <option value="ja">Japanese (Tiếng Nhật)</option>
                      <option value="zh">Chinese (Tiếng Trung)</option>
                      <option value="ko">Korean (Tiếng Hàn)</option>
                      <option value="Auto Detect">Tự phát hiện (Auto)</option>
                    </select>
                  </div>

                  {/* Chọn giọng AI */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Giọng đọc</label>
                    <select
                      value={voiceName}
                      onChange={(e) => setVoiceName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      disabled={filteredVoices.length === 0}
                    >
                      {filteredVoices.length === 0 ? (
                        <option value="">Không tìm thấy giọng phù hợp</option>
                      ) : (
                        filteredVoices.map((voice) => (
                          <option key={voice.name} value={voice.name}>
                            {voice.name}
                          </option>
                        ))
                      )}
                    </select>
                    {filteredVoices.length === 0 && (
                      <div className="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-[10px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                        ⚠️ Không tìm thấy giọng đọc {getLanguageLabel(language)} trên máy. Trình duyệt sẽ cố gắng tự phát âm bằng giọng trực tuyến.
                      </div>
                    )}
                  </div>

                  {/* Tốc độ phát Speed */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide dark:text-slate-400">Tốc độ phát âm</label>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{playbackSpeed}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={playbackSpeed}
                      onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                      className="w-full accent-indigo-600 dark:accent-indigo-400"
                    />
                  </div>

                  {/* Lặp lại */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Lặp lại (lần)</label>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={repeatLimit}
                      onChange={(e) => setRepeatLimit(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Chế độ tạm dừng */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Chế độ tạm dừng</label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                      <button
                        onClick={() => setPauseMode('auto')}
                        className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                          pauseMode === 'auto'
                            ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                            : 'text-slate-500'
                        }`}
                      >
                        Auto
                      </button>
                      <button
                        onClick={() => setPauseMode('manual')}
                        className={`py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                          pauseMode === 'manual'
                            ? 'bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 shadow-sm'
                            : 'text-slate-500'
                        }`}
                      >
                        Manual
                      </button>
                    </div>
                  </div>

                  {/* Chi tiết cho Tự động */}
                  {pauseMode === 'auto' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Preset nghỉ</label>
                      <select
                        value={pausePreset}
                        onChange={(e) => setPausePreset(e.target.value as PausePreset)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      >
                        <option value="beginner">Beginner (Hệ số 0.8)</option>
                        <option value="normal">Normal (Hệ số 0.5)</option>
                        <option value="advanced">Advanced (Hệ số 0.35)</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 dark:text-slate-400">Giây nghỉ</label>
                      <input
                        type="number"
                        min="2"
                        max="30"
                        value={manualPauseSeconds}
                        onChange={(e) => setManualPauseSeconds(Math.max(2, Math.min(30, parseInt(e.target.value) || 2)))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-950 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function PracticeArena() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm text-slate-500">Đang tải phòng luyện tập...</p>
          </div>
        </div>
      </div>
    }>
      <PracticeArenaContent />
    </Suspense>
  );
}
