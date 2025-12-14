import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Resources from "@/components/Resources";
import CareerQuiz from "@/components/CareerQuiz";
import CircularModel from "@/components/CircularModel";
import Blog from "@/components/Blog";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Resources />
      <CareerQuiz />
      <CircularModel />
      <Blog />
      <Impact />
      <Team />
      <Partners />
      <Contact />
      <Chatbot />
      <Footer />
    </main>
  );
}

