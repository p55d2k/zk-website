import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoilRoot } from "@/lib/recoil";
import "./globals.css";

import SocialIcons from "@/components/SocialIcons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhi Kai | Software Engineer",
  description:
    "Hi, I'm Zhi Kai, a software engineer specialised in frontend development. I'm also a high school student in Singapore, and enjoy creating beautiful and functional web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <RecoilRoot>
          <Header />
          <div className="h-full min-h-[80vh] text-white w-full bg-black">
            {children}
          </div>
          <Footer />
          <SocialIcons />
        </RecoilRoot>
      </body>
    </html>
  );
}
