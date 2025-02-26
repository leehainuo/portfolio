import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 组件
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { Suspense } from "react";
import Loading from "./loading";

const geist = Geist({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
