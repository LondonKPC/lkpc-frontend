import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "LondonKPC EM",
  description: "Website for LondonKPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
      <NavBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
