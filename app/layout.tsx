// chatGPT minor improvements, mostly in css
import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Navbar />
          <main className="flex-1 md:bg-[#F4F2EE] w-full mx-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
