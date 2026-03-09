import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COSMIC | Cosmic Finance",
  description: "Universal transactions at lightspeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500`}>
        
        {/* GLOBAL BACKGROUND CANVAS */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          {/* Subtle Tech Grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Ambient Cosmic Orbs */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-400/10 dark:bg-indigo-900/10 blur-[100px] rounded-full" />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-10">
          {children}
          
        </div>
        
      </body>
    </html>
  );
}