import type { Metadata } from "next";
import { Montserrat as MontserratFont } from "next/font/google";
import "./globals.css";

const Montserrat = MontserratFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pogarta",
  description: "Pogarta - Software House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en" >
      <body className={Montserrat.className}>{children}</body>
    </html>
  );
}