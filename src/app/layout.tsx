import type { Metadata } from "next";
import { raleway } from "@/app/utils/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DF Construction Services",
  description:
    "With over 20 years of experience, DF Construction Services is your trusted partner for all heavy construction needs in both commercial and residental sectors. As a licensed contractor, we specialize in delivering top-notch services that lay the foundation for successful projects in the greater New Orleans area.",
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
        className={` ${raleway} h-full flex bg-gradient-to-b from-slate-900 to-slate-600 flex-col`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white flex flex-col justify-center items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
