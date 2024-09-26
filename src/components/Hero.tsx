import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <section className="max-w-3xl mx-auto p-6">
        <h1 className="text-5xl font-bold">Welcome to Our Business</h1>
        <h2 className="text-3xl font-bold m-10">This is the template!</h2>
        <p className="mt-4 text-lg">
          We help you achieve your goals with our services.
        </p>

        <a
          href="/contact"
          className="mt-8 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full inline-flex items-center"
        >
          Get in Touch
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </section>
    </div>
  );
}
