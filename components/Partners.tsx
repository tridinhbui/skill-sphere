export default function Partners() {
  const advisors = {
    local: [
      "Eric Lundberg, PRC",
      "Drew Emerson",
    ],
    global: [
      "Duc Anh Thai Vu",
      "Tri Bui",
      "Ha Nguyen",
    ],
    potential: [
      "1M1B",
      "Nirman Organization",
      "NIIT Foundation",
    ],
  };

  const existingWork = [
    {
      name: "LeadYouth Mentor Paid Internship",
      description: "Providing mentorship and internship opportunities",
    },
    {
      name: "Mentor-Intern Program",
      description: "Global Citizenship Foundation initiative",
    },
    {
      name: "Returnships Podcast",
      description: "With Nabanita De",
    },
  ];

  return (
    <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Network
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
              Our Network
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advisors, mentors, and organizations supporting our mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform">
                🏠
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors">
                Local Advisors
              </h3>
              <ul className="space-y-3">
                {advisors.local.map((advisor, index) => (
                  <li key={index} className="flex items-center text-gray-700 group/item">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                    <span className="group-hover/item:text-gray-900 transition-colors">{advisor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors">
                Global Advisors
              </h3>
              <ul className="space-y-3">
                {advisors.global.map((advisor, index) => (
                  <li key={index} className="flex items-center text-gray-700 group/item">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                    <span className="group-hover/item:text-gray-900 transition-colors">{advisor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors">
                Potential Partners
              </h3>
              <ul className="space-y-3">
                {advisors.potential.map((partner, index) => (
                  <li key={index} className="flex items-center text-gray-700 group/item">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                    <span className="group-hover/item:text-gray-900 transition-colors">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 text-white rounded-2xl p-12 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Organizations Already Working on This Issue
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {existingWork.map((org, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur p-6 rounded-xl"
              >
                <h4 className="text-xl font-bold mb-2">{org.name}</h4>
                <p className="text-primary-50">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in partnering with SkillSphere or contributing to our
            mission? We&apos;d love to hear from you.
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

