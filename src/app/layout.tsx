import type { Metadata } from "next";
import { raleway } from "@/app/utils/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Small Business Promotion",
  description: "Landing page for promoting a small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={raleway.className}>
    <html lang="en">
      <body
        className={` ${raleway} h-full flex bg-gray-800 flex-col`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
