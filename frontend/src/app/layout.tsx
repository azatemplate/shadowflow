import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShadowFlow - AI Shadowing Practice",
  description: "Nền tảng luyện shadowing đa ngôn ngữ với giọng đọc thông minh, giúp nâng cao kỹ năng nói ngoại ngữ tự nhiên.",
  keywords: ["shadowing", "luyện nói", "tiếng anh", "tiếng nhật", "tiếng trung", "tiếng hàn", "ai shadowing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
