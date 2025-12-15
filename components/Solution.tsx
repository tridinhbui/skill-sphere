export default function Solution() {
  const solutions = [
    {
      title: "Free Career Resources",
      description:
        "Accessible and free career resources are extremely important in the current world. SkillSphere provides tools like resume templates, interview tips, and skill-building guides to help students, especially those from underrepresented backgrounds. These resources, along with AI-based skill assessments, help students stay confident and competitive in the job market.",
      icon: "📚",
      highlight: "AI-based skill assessments included",
    },
    {
      title: "Internship Directory",
      description:
        "SkillSphere partners with companies, NGOs, and startups that care about sustainability such as those focused on renewable energy, eco-friendly production, and recycling. This helps connect students with meaningful internship opportunities that support both career growth and environmental responsibility.",
      icon: "🌟",
      highlight: "Sustainability-focused opportunities",
    },
    {
      title: "Mentorship Networks",
      description:
        "Mentorship in SkillSphere is based on sharing knowledge and giving back. Experienced professionals guide students, and later, those students mentor others which creates a continuous cycle of learning and growth. This approach helps build a stronger and more connected professional community.",
      icon: "🤝",
      highlight: "Circular learning model",
    },
    {
      title: "Career Field Insights",
      description:
        "SkillSphere also helps students explore industries that focus on sustainability, green technology, and ethical business. By promoting awareness of these fields, the platform encourages students to pursue careers that balance success with social and environmental responsibility.",
      icon: "🔍",
      highlight: "Sustainability & green tech focus",
    },
    {
      title: "AI as a Support Tool",
      description:
        "Instead of replacing human workers, AI in SkillSphere is used to support learning and development. It provides personalized feedback and adapts to each student's progress, making skill-building more efficient and accessible. This reflects circular economy values — focusing on improvement, reuse, and long-term growth.",
      icon: "💡",
      highlight: "Personalized AI feedback",
    },
    {
      title: "Global Accessibility",
      description:
        "SkillSphere removes geographic barriers by making career resources available worldwide. This helps students from all backgrounds participate in the global economy, share knowledge, and collaborate across borders.",
      icon: "🌍",
      highlight: "Worldwide access, no barriers",
    },
  ];

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Global Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SkillSphere provides comprehensive, free resources to help you
            navigate your career journey with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-purple-50/0 group-hover:from-primary-50/100 group-hover:to-purple-50/100 transition-all duration-500 -z-0"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow-md">
                    {solution.highlight}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                  {solution.description}
                </p>
              </div>
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

