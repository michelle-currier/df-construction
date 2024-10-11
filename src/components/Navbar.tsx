// import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="p-6">logo</div>
      <nav className="flex justify-end">
        <ul className="flex space-x-4 m-6">
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
