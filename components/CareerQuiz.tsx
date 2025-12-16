"use client";

import { useState } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: "A" | "B" | "C" | "D";
    text: string;
  }[];
}

interface ResultCategory {
  id: "A" | "B" | "C" | "D";
  title: string;
  description: string;
  careers: string[];
  icon: string;
  color: string;
  gradient: string;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which activity do you enjoy the most?",
    options: [
      { label: "A", value: "A", text: "Solving puzzles or writing code" },
      { label: "B", value: "B", text: "Drawing, designing, or creating content" },
      { label: "C", value: "C", text: "Planning, organizing, or managing a team" },
      { label: "D", value: "D", text: "Helping others or improving community wellbeing" },
    ],
  },
  {
    id: 2,
    question: "What type of skills do you feel most confident about?",
    options: [
      { label: "A", value: "A", text: "Logical thinking and data analysis" },
      { label: "B", value: "B", text: "Creativity and communication" },
      { label: "C", value: "C", text: "Leadership and decision-making" },
      { label: "D", value: "D", text: "Empathy and research" },
    ],
  },
  {
    id: 3,
    question: "What is your preferred work environment?",
    options: [
      { label: "A", value: "A", text: "Fast-paced and tech-focused" },
      { label: "B", value: "B", text: "Flexible and creative" },
      { label: "C", value: "C", text: "Structured and goal-oriented" },
      { label: "D", value: "D", text: "Supportive and people-centered" },
    ],
  },
  {
    id: 4,
    question: "What motivates you the most?",
    options: [
      { label: "A", value: "A", text: "Innovation and new technology" },
      { label: "B", value: "B", text: "Artistic expression and storytelling" },
      { label: "C", value: "C", text: "Achieving goals and leading projects" },
      { label: "D", value: "D", text: "Making a positive impact on others" },
    ],
  },
];

const resultCategories: ResultCategory[] = [
  {
    id: "A",
    title: "Tech & Analytical",
    description:
      "You thrive in data-driven environments and enjoy solving complex problems. Your analytical mindset and technical skills make you well-suited for roles in technology, engineering, data science, and research.",
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "AI/ML Engineer",
      "Systems Analyst",
      "Research Scientist",
    ],
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    id: "B",
    title: "Creative & Design",
    description:
      "You have a strong creative vision and excel at communicating ideas visually. Your artistic talents and innovative thinking make you perfect for careers in design, media, marketing, and the arts.",
    careers: [
      "Graphic Designer",
      "UX/UI Designer",
      "Content Creator",
      "Marketing Specialist",
      "Art Director",
      "Video Producer",
    ],
    icon: "🎨",
    color: "from-purple-500 to-purple-600",
    gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
  },
  {
    id: "C",
    title: "Business & Leadership",
    description:
      "You're a natural leader who excels at strategy, organization, and driving results. Your leadership skills and business acumen make you ideal for management, consulting, entrepreneurship, and executive roles.",
    careers: [
      "Business Analyst",
      "Project Manager",
      "Management Consultant",
      "Entrepreneur",
      "Operations Manager",
      "Executive",
    ],
    icon: "📊",
    color: "from-green-500 to-green-600",
    gradient: "bg-gradient-to-r from-green-500 to-green-600",
  },
  {
    id: "D",
    title: "Healthcare & Social Impact",
    description:
      "You're driven by a desire to help others and make a meaningful difference. Your empathy, research skills, and commitment to social good make you well-suited for healthcare, education, social work, and nonprofit roles.",
    careers: [
      "Healthcare Professional",
      "Social Worker",
      "Teacher/Educator",
      "Nonprofit Manager",
      "Public Health Specialist",
      "Counselor",
    ],
    icon: "❤️",
    color: "from-pink-500 to-pink-600",
    gradient: "bg-gradient-to-r from-pink-500 to-pink-600",
  },
];

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<("A" | "B" | "C" | "D")[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ResultCategory | null>(null);

  const handleAnswer = (value: "A" | "B" | "C" | "D") => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = { A: 0, B: 0, C: 0, D: 0 };
      newAnswers.forEach((answer) => {
        counts[answer]++;
      });

      const maxCount = Math.max(counts.A, counts.B, counts.C, counts.D);
      let resultId: "A" | "B" | "C" | "D" = "A";
      
      if (counts.A === maxCount) resultId = "A";
      else if (counts.B === maxCount) resultId = "B";
      else if (counts.C === maxCount) resultId = "C";
      else resultId = "D";

      const resultCategory = resultCategories.find((cat) => cat.id === resultId);
      setResult(resultCategory || resultCategories[0]);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && result) {
    return (
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Your Career Match
            </h2>
            <p className="text-xl text-gray-600">
              Based on your answers, here&apos;s your career category
            </p>
          </div>

          <div className={`${result.gradient} text-white rounded-2xl p-12 shadow-2xl mb-8`}>
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">{result.icon}</div>
              <h3 className="text-4xl font-bold mb-4">{result.title}</h3>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mt-8">
              <h4 className="text-2xl font-bold mb-4 text-center">
                Potential Career Paths
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {result.careers.map((career, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur px-4 py-3 rounded-lg text-center font-semibold"
                  >
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={restartQuiz}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
            >
              Take Quiz Again
            </button>
            <a
              href="#resources"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all text-center"
            >
              Explore Resources
            </a>
          </div>

          {/* Result Categories - Only shown after completing quiz */}
          <div className="mt-8 bg-gray-100 rounded-2xl p-6 animate-fade-in-up">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Result Categories
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {resultCategories.map((category) => (
                <div
                  key={category.id}
                  className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-xl text-center hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-semibold">Mostly {category.id}</div>
                  <div className="text-xs opacity-90 mt-1">{category.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Career Quiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your strengths, interests, and potential career paths. Answer
            a few questions to find out which industries and roles best match your
            skills, values, and personal preferences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-primary-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary-600 to-primary-700 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 group-hover:bg-primary-600 text-primary-600 group-hover:text-white rounded-full flex items-center justify-center font-bold text-lg transition-colors">
                      {option.label}
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-gray-900 font-medium">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

