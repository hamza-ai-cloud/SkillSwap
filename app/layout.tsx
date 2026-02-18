import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SkillSwap - Exchange Skills, Not Money",
  description: "Join the ultimate skill exchange platform. Connect with talented individuals and swap your expertise for new skills. No money required.",
  keywords: ["skill exchange", "barter", "learning", "education", "skill swap"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '2px solid #00ffff',
              boxShadow: '0 0 10px #00ffff',
            },
          }}
        />
      </body>
    </html>
  );
}
