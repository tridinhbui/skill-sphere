export default function Solution() {
  const features = [
    {
      title: "Free Career Resources",
      description:
        "Resume templates, interview prep guides, and skill-building resources accessible to everyone.",
      icon: "📚",
    },
    {
      title: "Internship Directory",
      description:
        "Curated opportunities and entry-level positions to help you gain real-world experience.",
      icon: "🌟",
    },
    {
      title: "Mentorship Networks",
      description:
        "Connect with experienced professionals who can guide your career journey.",
      icon: "🤝",
    },
    {
      title: "Career Field Insights",
      description:
        "Learn about different industries and career paths from experts in the field.",
      icon: "🔍",
    },
    {
      title: "AI as a Support Tool",
      description:
        "Learn to leverage AI technology to enhance your skills rather than compete with it.",
      icon: "💡",
    },
    {
      title: "Global Accessibility",
      description:
        "Access resources from anywhere in the world, breaking down geographic barriers.",
      icon: "🌍",
    },
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Global Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SkillSphere provides comprehensive, free resources to help you
            navigate your career journey with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border-2 border-primary-100 hover:border-primary-300 transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Incremental Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <h4 className="text-xl font-semibold mb-2">
                Awareness & Outreach
              </h4>
              <p className="text-primary-50">
                Launch campaigns in schools, colleges, and online communities to
                reach our pilot users.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <h4 className="text-xl font-semibold mb-2">
                Resource Development
              </h4>
              <p className="text-primary-50">
                Curate reliable resources and build directories of
                opportunities and mentorship networks.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <h4 className="text-xl font-semibold mb-2">
                User Impact Tracking
              </h4>
              <p className="text-primary-50">
                Collect feedback and adjust resources based on real user
                outcomes and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

