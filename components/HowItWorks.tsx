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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to career success in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - hidden on mobile, shown on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 -z-10" />
              )}

              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="text-7xl">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Join Thousands of Students Already Using SkillSphere
              </h3>
              <p className="text-gray-600 mb-6">
                From high school to post-grad, students worldwide are using our
                platform to launch their careers with confidence.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    10K+
                  </div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Mentors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Opportunities</div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


