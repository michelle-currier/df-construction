// import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { teko } from "@/app/utils/fonts";
import Image from "next/image";

import logo from "./../images/df-logo-white.png";
export default function Navbar() {
  return (
    <div className="flex mx-auto justify-between max-w-7xl w-full">
      <div className="p-6">
        <TransitionLink href="/">
          <Image
            src={logo}
            alt="DF Construction Services logo"
            className="w-full h-10 object-cover"
            loading="eager"
          />
        </TransitionLink>
      </div>
      <nav className="flex justify-end">
        <ul className={` ${teko} flex space-x-8 m-6`}>
          <li>
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/about">Services</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/contact">Contact</TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
