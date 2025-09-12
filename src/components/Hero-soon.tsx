import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/utils/TransitionButton";
import { teko } from "@/app/utils/fonts";

export default function HeroSoon() {
  return (
    <section className="bg-[url('./../images/demoAfter.jpg')] bg-cover w-full mb-8 bg-center">
      <hr className="border-teal-700 pb-10 mx-auto w-full" />
      <div className="max-w-5xl mx-auto p-12 flex flex-col bg-white bg-opacity-60">
        <h1 className={` ${teko} text-5xl font-bold drop-shadow-sm`}>
          Welcome to DF Construction Services
        </h1>
        <h1 className={` ${teko} text-5xl font-bold text-teal-900 mt-4`}>
          Site is under construction!
        </h1>
        <h2 className="text-3xl font-bold my-4 text-teal-800">
          Building Strong Foundations, Clearing New Paths.
        </h2>
        <p className="my-4 text-lg text-slate-900">
          With over 20 years of experience, DF Construction Services is your
          trusted partner for all heavy construction needs in both commercial
          and residental sectors. As a licensed contractor, we specialize in
          delivering top-notch services that lay the foundation for successful
          projects in the greater New Orleans area.
        </p>
        <div className="flex flex-row">
          <TransitionButton href="/contact">
            <button className="mt-8 bg-gradient-to-r from-teal-600 to-blue-600  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
              Get in Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
        </div>
        <p className="mt-8 text-lg text-slate-900">
          At DF Construction Services, we pride ourselves on our commitment to
          quality, safety, and customer satisfaction. Our skilled team uses the
          latest equipment and techniques to ensure every job is completed
          efficiently and to the highest standards.
        </p>
      </div>
      <hr className="border-teal-700 mt-8 mx-auto w-full" />
    </section>
  );
}
