import type { Metadata } from "next";
import { Raleway } from "@next/font/google";
// import { Roboto } from "@next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  // display: "swap",
});

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
    <html lang="en">
      <body
        className={raleway.className}
        // className="{raleway.className}"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
