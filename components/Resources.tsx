export default function Resources() {
  const resourceCategories = [
    {
      title: "Resume & CV Templates",
      description:
        "Professional, ATS-friendly templates for different industries and experience levels",
      items: [
        "Entry-level resume templates",
        "Professional CV formats",
        "Portfolio templates",
        "Cover letter samples",
      ],
      icon: "📄",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Interview Preparation",
      description:
        "Comprehensive guides and practice materials to ace your interviews",
      items: [
        "Common interview questions",
        "Technical interview prep",
        "Behavioral interview guides",
        "Mock interview scenarios",
      ],
      icon: "🎤",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Industry Insights",
      description: "Latest trends and employer expectations across sectors",
      items: [
        "Industry reports",
        "Salary benchmarks",
        "Skills in demand",
        "Company culture guides",
      ],
      icon: "📊",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="resources"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Resources
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
              Free Career Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed in your career journey, completely
            free and accessible worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-transparent relative animate-fade-in-scale hover-3d perspective-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden animate-gradient bg-[length:200%_200%]`}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                
                {/* Floating decorative circles */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 animation-delay-2000"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">{category.title}</h3>
                  <p className="text-sm opacity-95 leading-relaxed">{category.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Access all our resources for free. No sign-up required, no hidden
            fees. Just pure career support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/drive/folders/1_O0Do9G7_gJ182V9lhxUYk4EsYr_5L5x?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 text-center"
            >
              Download Resource Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


