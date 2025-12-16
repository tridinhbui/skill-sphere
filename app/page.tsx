import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Resources from "@/components/Resources";
import Blog from "@/components/Blog";
import CareerQuiz from "@/components/CareerQuiz";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Resources />
      <Blog />
      <CareerQuiz />
      <Impact />
      <Team />
      <Contact />
      <Chatbot />
      <Footer />
    </main>
  );
}

