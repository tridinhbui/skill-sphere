export default function CircularModel() {
  const courses = [
    {
      title: "Green Entrepreneurship & Innovation",
      description:
        "Teach how to build eco-friendly startups using circular economy models. Learn to create sustainable business models that reduce waste and maximize resource efficiency.",
      icon: "🌱",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Digital Literacy for Sustainability",
      description:
        "Help students use digital tools to reduce waste (e.g., using AI to optimize energy or materials). Master technology solutions for environmental challenges.",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Career Pathways in the Green Economy",
      description:
        "Explore careers in renewable energy and sustainable technology. Discover opportunities in the fastest-growing sectors of the economy.",
      icon: "♻️",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const userFeatures = [
    {
      title: "Repair & Improvement",
      description:
        "Encourage repair and improvement of existing projects. Learn to extend the life of resources and skills through continuous improvement.",
      icon: "🔧",
    },
  ];

  const employeeFeatures = [
    {
      title: "Materials Tracker",
      description:
        "Track and optimize resource usage. Monitor materials, skills, and knowledge to maximize efficiency and minimize waste.",
      icon: "📊",
    },
  ];

  const impacts = [
    {
      title: "Making Job Hunting Easier",
      description:
        "Providing free resume guides, interview tips, and skill assessments, which help prepare candidates better for the job market.",
      icon: "📝",
    },
    {
      title: "Connecting Learners with Mentors",
      description:
        "Mentors provide personalized advice and career insights, improving job readiness and motivation through one-on-one guidance.",
      icon: "🤝",
    },
    {
      title: "Creating Sustainable Partnerships",
      description:
        "Partnerships with sustainable companies to offer internships and jobs that align with future industry trends and environmental responsibility.",
      icon: "🌍",
    },
    {
      title: "AI as Learning Support",
      description:
        "Using AI as a learning support tool to provide adaptive feedback, making skill development more efficient and personalized.",
      icon: "🤖",
    },
    {
      title: "Global Access to Resources",
      description:
        "Increasing global access to career resources, removing geographic and social barriers so more people can participate in the job market.",
      icon: "🌐",
    },
  ];

  return (
    <section
      id="circular-model"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Circular Model Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a sustainable future through circular economy principles,
            where resources are reused, improved, and optimized for long-term
            impact
          </p>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Courses
          </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-r ${course.color} text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden animate-fade-in-scale hover-3d perspective-3d`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 animation-delay-2000"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-5 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                  {course.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">{course.title}</h4>
                <p className="text-white/95 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* For Users & Employees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Users */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">👥</span>
              For Users
            </h3>
            {userFeatures.map((feature, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* For Employees */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">💼</span>
              For Employees
            </h3>
            {employeeFeatures.map((feature, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden animate-gradient bg-[length:200%_200%] shadow-2xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-10 text-center animate-fade-in-up">
              Impact of SkillSphere
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40 animate-scale-in hover-shimmer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                    {impact.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform">{impact.title}</h4>
                  <p className="text-white/90 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Circular Economy Principles */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Circular Economy Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Reduce</h4>
              <p className="text-gray-600">
                Minimize waste and optimize resource usage through efficient
                practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Reuse</h4>
              <p className="text-gray-600">
                Extend the life of skills, knowledge, and resources through
                continuous improvement
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Regenerate</h4>
              <p className="text-gray-600">
                Create sustainable systems that benefit both people and the
                planet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

