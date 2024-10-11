"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outfit } from "next/font/google";
import "../styles/index.css";

const inter = Outfit({ subsets: ["latin"] });

import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
