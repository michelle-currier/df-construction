// import localFont from "next/font/local";
import { Raleway, Teko } from "@next/font/google";

const ralewayFont = Raleway({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
  });
  const tekoFont = Teko({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
  });

  export const raleway = ralewayFont.className;
  export const teko = tekoFont.className;
