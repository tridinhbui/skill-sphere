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
      title: "Skill Development",
      description:
        "Free courses and learning paths to build in-demand skills",
      items: [
        "Digital marketing basics",
        "Coding fundamentals",
        "Data analysis tools",
        "Communication skills",
      ],
      icon: "🚀",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Career Path Guides",
      description:
        "Detailed roadmaps for various industries and career trajectories",
      items: [
        "Tech career paths",
        "Business & finance routes",
        "Creative industry guides",
        "Healthcare careers",
      ],
      icon: "🗺️",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Networking Tools",
      description:
        "Resources to build your professional network and personal brand",
      items: [
        "LinkedIn optimization",
        "Networking event calendar",
        "Email templates",
        "Personal branding guide",
      ],
      icon: "🤝",
      color: "from-pink-500 to-pink-600",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Free Career Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your career journey, completely
            free and accessible worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resourceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
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
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              Browse All Resources
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Download Resource Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


