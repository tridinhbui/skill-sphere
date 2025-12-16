export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Explore Resources",
      description:
        "Browse our library of free resume templates, interview guides, skill-building courses, and career insights tailored to your needs.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Connect & Learn",
      description:
        "Join our mentorship network to connect with industry professionals. Get personalized guidance and real-world advice.",
      icon: "🤝",
    },
    {
      number: "03",
      title: "Find Opportunities",
      description:
        "Access our curated internship and job directory. Apply to positions that match your skills and career goals.",
      icon: "🎯",
    },
    {
      number: "04",
      title: "Build Your Future",
      description:
        "Use our tools to create a standout resume, prepare for interviews, and leverage AI to enhance your career prospects.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your journey to career success in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in-scale" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Animated connector line - hidden on mobile, shown on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300 via-purple-300 to-primary-200 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  {/* Animated dot */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary-500 rounded-full transform -translate-y-1/2 animate-pulse-glow"></div>
                </div>
              )}

              <div className="text-center hover-lift">
                <div className="relative inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-7xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-float">
                    {step.icon}
                  </div>
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary-200 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse-glow"></div>
                  
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow-pulse">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


