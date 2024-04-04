import type { Metadata } from "next";
import { Montserrat as MontserratFont } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/pogartaLogoSquareSmall.png" />
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} /> 
      </Head>
    <html data-theme="light" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={Montserrat.className}>{children}</body>
    </html>
  );
}

