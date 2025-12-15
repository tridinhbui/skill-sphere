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

        <div className="bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary-100 shadow-xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, rgb(14, 165, 233) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 animate-slide-in-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                  Join Thousands of Students Already Using SkillSphere
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From high school to post-grad, students worldwide are using our
                  platform to launch their careers with confidence.
                </p>
                <div className="flex items-center gap-8">
                  {[
                    { value: "10K+", label: "Active Users" },
                    { value: "500+", label: "Mentors" },
                    { value: "1000+", label: "Opportunities" }
                  ].map((stat, index) => (
                    <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 animate-slide-in-right">
                <button className="group relative bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-purple-700 transition-all hover:scale-110 shadow-lg hover:shadow-2xl overflow-hidden hover-shimmer">
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


