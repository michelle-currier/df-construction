"use client";
import { teko } from "@/app/utils/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Cards from "@/components/Cards";
import { TransitionButton } from "@/components/utils/TransitionButton";

export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6">
        <h2 className={` ${teko} text-4xl font-bold`}>About</h2>
        <Cards />
      </div>
    </div>
  );
}
