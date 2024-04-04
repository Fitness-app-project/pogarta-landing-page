import type { Metadata } from "next";
import { Montserrat as MontserratFont } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

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
  const description = metadata.description || ""; 
  return (
    <html data-theme="light" lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={description} /> 
        <link rel="icon" href="/pogartaLogoSquareSmall.png" type="image/png" sizes="32x32" />
      </Head>
      <body className={Montserrat.className}>{children}</body>
    </html>
  );
}
