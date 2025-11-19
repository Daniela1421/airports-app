import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const gothamBlack = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham/Gotham-Black-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gotham-black",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
