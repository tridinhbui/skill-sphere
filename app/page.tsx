import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Team />
      <Partners />
      <Footer />
    </main>
  );
}

