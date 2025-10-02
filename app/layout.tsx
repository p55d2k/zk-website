import type { Metadata } from "next";
import "@/styles/globals.css";

import { interFont } from "@/constants/fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zhi Kai • Software Engineer",
  description:
    "Hi, I'm Zhi Kai, a software engineer specialised in frontend development. I'm also a high school student in Singapore, and enjoy creating beautiful and functional web applications.",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className + " bg-black"}>
        <Header />
        <div className="h-full min-h-[80vh] text-white w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
