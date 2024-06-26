import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhi Kai • Software Engineer",
  description:
    "Hi, I'm Zhi Kai, a software engineer specialised in frontend development. I'm also a high school student in Singapore, and enjoy creating beautiful and functional web applications.",
  icons: ["/favicon.ico"],
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <Header />
        <div className="h-full min-h-[80vh] text-white w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
