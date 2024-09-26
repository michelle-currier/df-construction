import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-800 text-white flex flex-col justify-center items-center">
      <Hero />
      <Testimonials />
      <Footer />
    </main>
  );
}
