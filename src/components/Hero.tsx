import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/utils/TransitionButton";
import { teko } from "@/app/utils/fonts";
export default function Hero() {
  return (
    <div className="flex flex-col mb-6">
      <section className="max-w-3xl mx-auto p-6">
        <h1 className={` ${teko} text-5xl font-bold`}>
          Welcome to DF Construction Services
        </h1>
        <h2 className="text-3xl font-bold my-10"></h2>
        <p className="mt-4 text-lg">
          With over 20 years of experience, DF Construction Services is your
          trusted partner for all heavy construction needs in both commercial
          and residental sectors. As a licensed contractor, we specialize in
          delivering top-notch services that lay the foundation for successful
          projects in the greater New Orleans area.
        </p>
        <TransitionButton href="/contact">
          <button className="mt-8 bg-gradient-to-r from-teal-600 to-blue-600  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-all duration-500">
            Get in Touch
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </TransitionButton>
        <TransitionButton href="/about">
          <button className="mt-8 ml-8 bg-gradient-to-r from-teal-600 to-blue-600  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
            Services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </TransitionButton>

        <p className="mt-8 text-lg">
          At DF Construction Services, we pride ourselves on our commitment to
          quality, safety, and customer satisfaction. Our skilled team uses the
          latest equipment and techniques to ensure every job is completed
          efficiently and to the highest standards.
        </p>
      </section>
    </div>
  );
}
