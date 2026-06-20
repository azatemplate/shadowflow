'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export type PlayerState = 
  | 'IDLE' 
  | 'PLAYING_AUDIO' 
  | 'PAUSED_AUDIO' 
  | 'WAITING_SHADOW' 
  | 'PAUSED_SHADOW' 
  | 'COMPLETED';

export type PauseMode = 'auto' | 'manual';
export type PausePreset = 'beginner' | 'normal' | 'advanced';

interface SpeechOptions {
  language: string;       // BCP-47 tag hoặc 'Auto Detect'
  voiceName: string;      // Tên giọng đọc được chọn
  playbackSpeed: number;  // Tốc độ phát (0.5 -> 2.0)
  repeatLimit: number;    // Số lần lặp lại (1 -> 99)
  pauseMode: PauseMode;
  pausePreset: PausePreset;
  manualPauseSeconds: number;
}

export function useSpeechSynthesis(options: SpeechOptions, onSessionComplete?: (stats: {
  sentencesCount: number;
  loopsCount: number;
  durationSeconds: number;
}) => void) {
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentLoop, setCurrentLoop] = useState<number>(1);
  const [playerState, setPlayerState] = useState<PlayerState>('IDLE');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [countdown, setCountdown] = useState<number>(0);
  const [totalPauseDuration, setTotalPauseDuration] = useState<number>(0);

  // Refs để lưu trữ trạng thái chạy ngầm tránh dependency loop trong useEffect
  const stateRef = useRef<PlayerState>('IDLE');
  const indexRef = useRef<number>(0);
  const loopRef = useRef<number>(1);
  const sentencesRef = useRef<string[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const accumulatedDurationRef = useRef<number>(0);

  // Cập nhật refs khi state thay đổi
  useEffect(() => { stateRef.current = playerState; }, [playerState]);
  useEffect(() => { indexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { loopRef.current = currentLoop; }, [currentLoop]);
  useEffect(() => { sentencesRef.current = sentences; }, [sentences]);

  // Load danh sách giọng đọc từ Browser
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Tính số lượng từ trong một câu
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(w => w.length > 0).length;
  };

  // Tính thời gian nghỉ nghỉ
  const getPauseDuration = useCallback((sentence: string) => {
    if (options.pauseMode === 'manual') {
      return options.manualPauseSeconds;
    }
    // Chỉ đếm từ của phần tiếng Anh trước dấu '|'
    const englishPart = sentence.includes('|') ? sentence.split('|')[0].trim() : sentence;
    const words = countWords(englishPart);
    let factor = 0.5;
    if (options.pausePreset === 'beginner') factor = 0.8;
    if (options.pausePreset === 'advanced') factor = 0.35;
    
    const pause = words * factor;
    return Math.max(2, Math.min(8, pause));
  }, [options.pauseMode, options.manualPauseSeconds, options.pausePreset]);

  // Hủy bỏ giọng nói và đếm ngược đang chạy
  const cancelAll = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Hàm phát âm câu hiện tại
  const speakCurrent = useCallback(() => {
    if (typeof window === 'undefined') return;
    cancelAll();

    const currentSentence = sentencesRef.current[indexRef.current];
    if (!currentSentence) return;

    // Chỉ phát âm phần tiếng Anh trước dấu gạch đứng '|'
    const textToSpeak = currentSentence.includes('|') 
      ? currentSentence.split('|')[0].trim() 
      : currentSentence;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance;
    
    const getFullLocale = (lang: string): string => {
      const code = lang.toLowerCase().trim();
      if (code === 'en') return 'en-US';
      if (code === 'vi') return 'vi-VN';
      if (code === 'ja') return 'ja-JP';
      if (code === 'ko') return 'ko-KR';
      if (code === 'zh') return 'zh-CN';
      return lang;
    };

    // Tìm và cài đặt voice phù hợp
    if (options.voiceName) {
      const selectedVoice = window.speechSynthesis.getVoices().find(v => v.name === options.voiceName);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else if (options.language && options.language !== 'Auto Detect') {
        utterance.lang = getFullLocale(options.language);
      }
    } else if (options.language && options.language !== 'Auto Detect') {
      const fullLocale = getFullLocale(options.language);
      utterance.lang = fullLocale;

      // Tìm giọng đọc theo ngôn ngữ được chọn
      const langVoices = window.speechSynthesis.getVoices().filter(v => 
        v.lang.toLowerCase().startsWith(options.language.toLowerCase()) || 
        options.language.toLowerCase().startsWith(v.lang.toLowerCase())
      );
      if (langVoices.length > 0) {
        const exactMatch = langVoices.find(v => v.lang.toLowerCase() === fullLocale.toLowerCase());
        const selected = exactMatch || langVoices[0];
        utterance.voice = selected;
        utterance.lang = selected.lang;
      }
    }

    utterance.rate = options.playbackSpeed;

    // Sự kiện khi đọc xong câu
    utterance.onend = () => {
      // Chỉ chuyển trạng thái nếu lúc kết thúc vẫn đang phát audio
      if (stateRef.current === 'PLAYING_AUDIO') {
        const pauseTime = getPauseDuration(currentSentence);
        setTotalPauseDuration(pauseTime);
        setCountdown(pauseTime);
        setPlayerState('WAITING_SHADOW');
        startCountdown(pauseTime);
      }
    };

    utterance.onerror = (e) => {
      // Nếu bị hủy do bấm stop/prev/next thì không xử lý lỗi
      if (e.error !== 'interrupted') {
        console.error('SpeechSynthesis error:', e);
      }
    };

    setPlayerState('PLAYING_AUDIO');
    window.speechSynthesis.speak(utterance);
  }, [options.voiceName, options.language, options.playbackSpeed, getPauseDuration, cancelAll]);

  // Bộ đếm ngược cho thời gian người dùng đọc theo
  const startCountdown = useCallback((duration: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    let timeLeft = duration;
    timerRef.current = setInterval(() => {
      timeLeft -= 0.1;
      if (timeLeft <= 0) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        setCountdown(0);
        
        // Chuyển sang câu tiếp theo
        moveToNext();
      } else {
        setCountdown(Number(timeLeft.toFixed(1)));
      }
    }, 100);
  }, []);

  // Chuyển câu tiếp theo hoặc lặp lại
  const moveToNext = useCallback(() => {
    const nextIdx = indexRef.current + 1;
    const currentSentences = sentencesRef.current;

    if (nextIdx < currentSentences.length) {
      indexRef.current = nextIdx; // Cập nhật ref đồng bộ ngay lập tức để tránh lệch tiếng và hình
      setCurrentIndex(nextIdx);
      speakCurrent();
    } else {
      // Hết danh sách câu, kiểm tra vòng lặp
      const nextLoop = loopRef.current + 1;
      if (nextLoop <= options.repeatLimit) {
        loopRef.current = nextLoop; // Cập nhật ref đồng bộ
        setCurrentLoop(nextLoop);
        indexRef.current = 0; // Cập nhật ref đồng bộ
        setCurrentIndex(0);
        speakCurrent();
      } else {
        // Hoàn thành hoàn toàn buổi shadowing
        setPlayerState('COMPLETED');
        cancelAll();
        
        // Tính toán tổng thời gian luyện tập thực tế
        let sessionDuration = accumulatedDurationRef.current;
        if (startTimeRef.current) {
          sessionDuration += Math.round((Date.now() - startTimeRef.current) / 1000);
          startTimeRef.current = null;
        }
        
        if (onSessionComplete) {
          onSessionComplete({
            sentencesCount: currentSentences.length,
            loopsCount: options.repeatLimit,
            durationSeconds: sessionDuration > 0 ? sessionDuration : Math.round(currentSentences.length * 4 * options.repeatLimit)
          });
        }
      }
    }
  }, [options.repeatLimit, speakCurrent, cancelAll, onSessionComplete]);

  // --- PUBLIC CONTROLS ---

  const start = useCallback((texts: string[]) => {
    if (texts.length === 0) return;
    
    cancelAll();
    sentencesRef.current = texts; // Cập nhật ref đồng bộ ngay lập tức
    setSentences(texts);
    indexRef.current = 0; // Cập nhật ref đồng bộ ngay lập tức
    setCurrentIndex(0);
    loopRef.current = 1; // Cập nhật ref đồng bộ ngay lập tức
    setCurrentLoop(1);
    
    // Ghi nhận thời gian bắt đầu
    startTimeRef.current = Date.now();
    accumulatedDurationRef.current = 0;

    // Trigger phát câu nói thứ nhất
    // Sử dụng setTimeout để đảm bảo state sentences đã được cập nhật
    setTimeout(() => {
      speakCurrent();
    }, 0);
  }, [speakCurrent, cancelAll]);

  const pause = useCallback(() => {
    const currentState = stateRef.current;
    
    if (currentState === 'PLAYING_AUDIO') {
      if (typeof window !== 'undefined') {
        window.speechSynthesis.pause();
      }
      setPlayerState('PAUSED_AUDIO');
    } else if (currentState === 'WAITING_SHADOW') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setPlayerState('PAUSED_SHADOW');
    }

    // Cộng dồn thời gian luyện tập trước khi pause
    if (startTimeRef.current) {
      accumulatedDurationRef.current += Math.round((Date.now() - startTimeRef.current) / 1000);
      startTimeRef.current = null;
    }
  }, []);

  const resume = useCallback(() => {
    const currentState = stateRef.current;
    
    startTimeRef.current = Date.now(); // Tiếp tục tính thời gian

    if (currentState === 'PAUSED_AUDIO') {
      setPlayerState('PLAYING_AUDIO');
      if (typeof window !== 'undefined') {
        window.speechSynthesis.resume();
      }
    } else if (currentState === 'PAUSED_SHADOW') {
      setPlayerState('WAITING_SHADOW');
      startCountdown(countdown);
    }
  }, [countdown, startCountdown]);

  const stop = useCallback(() => {
    cancelAll();
    setPlayerState('IDLE');
    setCurrentIndex(0);
    setCurrentLoop(1);
    setCountdown(0);
    
    startTimeRef.current = null;
    accumulatedDurationRef.current = 0;
  }, [cancelAll]);

  const next = useCallback(() => {
    const nextIdx = indexRef.current + 1;
    if (nextIdx < sentences.length) {
      indexRef.current = nextIdx; // Cập nhật ref đồng bộ
      setCurrentIndex(nextIdx);
      speakCurrent();
    }
  }, [sentences.length, speakCurrent]);

  const prev = useCallback(() => {
    const prevIdx = indexRef.current - 1;
    if (prevIdx >= 0) {
      indexRef.current = prevIdx; // Cập nhật ref đồng bộ
      setCurrentIndex(prevIdx);
      speakCurrent();
    }
  }, [speakCurrent]);

  const repeatCurrent = useCallback(() => {
    speakCurrent();
  }, [speakCurrent]);

  const jumpTo = useCallback((index: number) => {
    if (index >= 0 && index < sentences.length) {
      indexRef.current = index; // Cập nhật ref đồng bộ
      setCurrentIndex(index);
      speakCurrent();
    }
  }, [sentences.length, speakCurrent]);

  // Tự hủy đếm khi unmount
  useEffect(() => {
    return () => {
      cancelAll();
    };
  }, [cancelAll]);

  return {
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
  };
}
