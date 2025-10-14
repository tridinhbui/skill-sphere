export default function Team() {
  const teamMembers = [
    { name: "Sohni", role: "Team Member" },
    { name: "Phuong", role: "Team Member" },
    { name: "Sangay", role: "Team Member" },
    { name: "Camille", role: "Team Member" },
    { name: "Clary", role: "Team Member" },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated group of students working to make career resources
            accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-all"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Challenges We&apos;re Addressing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">Funding</h4>
              <p className="text-gray-600 text-sm">
                Raising enough money to support and scale our project
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-bold text-gray-900 mb-2">
                Industry Insights
              </h4>
              <p className="text-gray-600 text-sm">
                Finding legitimate sources for accurate industry information
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">
                Building partnerships with government, communities, and
                organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

