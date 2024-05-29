import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";
const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Energy Track",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-barba="wrapper" className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
