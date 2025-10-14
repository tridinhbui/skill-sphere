export default function Impact() {
  const expectedResults = [
    {
      title: "Lower Unemployment Rates",
      description:
        "More people learning to effectively present their skills as they enter the workplace.",
      icon: "📈",
    },
    {
      title: "AI as a Tool, Not a Threat",
      description:
        "Empowering people to leverage AI as support rather than having their careers replaced by it.",
      icon: "🛠️",
    },
    {
      title: "Career Certainty",
      description:
        "Increased confidence and clarity in career-related decisions and pathways.",
      icon: "✨",
    },
    {
      title: "Improved Well-Being",
      description:
        "Less job anxiety means more time with family and a positive outlook on life.",
      icon: "❤️",
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Expected Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The positive changes we anticipate as a result of SkillSphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expectedResults.map((result, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{result.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {result.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Global Significance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <p className="text-gray-700">
                  Free resources for all education levels worldwide
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <p className="text-gray-700">
                  Help those with fewer opportunities and connections access
                  career resources
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <p className="text-gray-700">
                  Address real-world employment needs in an AI-driven workforce
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <p className="text-gray-700">
                  Prepare people to leverage resources and thrive in the
                  workplace
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Partnership for Greater Impact
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Our project becomes stronger through partnerships with schools,
            universities, and companies. Collaborative partnerships help us
            reach more students, provide more opportunities, build trust, and
            extend our global reach.
          </p>
        </div>
      </div>
    </section>
  );
}

