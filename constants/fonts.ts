import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";

export const interFont = Inter({ subsets: ["latin"] });

export const outfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const satoshiFont = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
});