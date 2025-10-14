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
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advisors, mentors, and organizations supporting our mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Local Advisors
            </h3>
            <ul className="space-y-2">
              {advisors.local.map((advisor, index) => (
                <li key={index} className="text-gray-600">
                  • {advisor}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Advisors
            </h3>
            <ul className="space-y-2">
              {advisors.global.map((advisor, index) => (
                <li key={index} className="text-gray-600">
                  • {advisor}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Potential Partners
            </h3>
            <ul className="space-y-2">
              {advisors.potential.map((partner, index) => (
                <li key={index} className="text-gray-600">
                  • {partner}
                </li>
              ))}
            </ul>
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

