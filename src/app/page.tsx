import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
      <Hero />
      <Testimonials />
    </main>
  );
}
