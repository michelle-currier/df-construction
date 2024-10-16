// import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { teko } from "@/app/utils/fonts";

export default function Navbar() {
  return (
    <div className="flex mx-auto justify-between max-w-7xl w-full">
      <div className="p-6">logo</div>
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
