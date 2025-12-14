export default function Contact() {
  const teamMembers = [
    {
      name: "Sohni Singh",
      role: "Research and Website Content",
      teamRole: "Team Member",
      contacts: {
        instagram: "_sohnisingh",
        linkedin: "Sohni Singh",
        email: "sohnisingh2020@gmail.com",
      },
      description:
        "Sohni conducted extensive research on the content of the website, related to the different career industries, career pathways, and soft and technical skills needed for each industry. And she is very health-conscious and brings attention to wellbeing and sustainability to our team projects.",
      about:
        "Hello! My name is Sohni Singh, and I am a senior at Maharishi School. I am interested in neuroscience, healthcare, and entrepreneurship. I love to read, paint, travel, listen to music, and bake in my free time. For a long time, I felt very unsure about what I wanted to study in college and what career I could pursue. I didn't know exactly what steps I could take to really dive into my interests, talents, passions, and skills that would help me find a path that was suited for me. I often wished there was one main place or hub where I could have access to all of these, where I could have mentors and guidance for each career field that could provide insights into what those career fields really looked like on a daily basis.",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sangay Yangdon Wangdi",
      role: "Research and Social Media Content",
      teamRole: "Team Member",
      contacts: {
        instagram: null,
        linkedin: null,
        email: null,
      },
      description:
        "Sangay helped with visual design of the SkillSphere website, and contributed to research and data collection, supporting our platform with valuable insights.",
      about:
        "Greetings! My name is Sangay Yangdon Wangdi. I am a senior at Maharishi School in Fairfield, Iowa. I have a lot of hobbies which include reading, playing sports, listening to music, doing yoga, watching movies, dancing, and singing. Academically, I have a keen interest in science and technology. Therefore, for college, I would probably like to study something related to my field of interest.",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Camille",
      role: "Designing & Marketing",
      teamRole: "Team Member",
      contacts: {
        instagram: null,
        linkedin: "Lingjun Jiang",
        email: "26jianca@eaaschool.org",
      },
      description:
        "Camille mainly focused on maintaining our budget, conducting extensive marketing research to make the platform accessible and appealing to students and mentors.",
      about: null,
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Clary",
      role: "Design & Information Researcher",
      teamRole: "Team Member",
      contacts: {
        instagram: null,
        linkedin: null,
        email: "linglu0310@gmail.com",
      },
      description:
        "Clary focuses on information research and contributes to the platform's design, ensuring clarity, usability, and an intuitive user experience.",
      about: null,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Phuong Nguyen",
      role: "Finance Management & Public Relations",
      teamRole: "Team Member",
      contacts: {
        instagram: null,
        linkedin: "Phuong Nguyen",
        email: "pnguyencollege214@gmail.com",
      },
      description:
        "Phuong manages finance and public relations, secures resources, and connects SkillSphere with partners and supporters for mentorship.",
      about:
        "Hello! My name is Phuong Nguyen, a senior at Maharishi School. I'm interested in entrepreneurship, business, and economics. I would love to spend my free time baking and listening to podcasts.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the passionate individuals behind SkillSphere
          </p>
        </div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="md:flex">
                {/* Left side - Avatar and basic info */}
                <div
                  className={`bg-gradient-to-r ${member.color} p-8 md:p-12 text-white md:w-1/3 flex flex-col justify-center items-center text-center`}
                >
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4 backdrop-blur-sm">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{member.teamRole}</p>
                  <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* Right side - Details */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="mb-6">
                    <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {member.role}
                    </span>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.description}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Contact
                    </h4>
                    <div className="space-y-2">
                      {member.contacts.email && (
                        <div className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 mr-3 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${member.contacts.email}`}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {member.contacts.email}
                          </a>
                        </div>
                      )}
                      {member.contacts.linkedin && (
                        <div className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 mr-3 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span>{member.contacts.linkedin}</span>
                        </div>
                      )}
                      {member.contacts.instagram && (
                        <div className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 mr-3 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                          <span>@{member.contacts.instagram}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* About Me */}
                  {member.about && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        About Me
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {member.about}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Introduction Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Team Introduction</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We are a diverse team of passionate students from Maharishi School,
            united by our shared vision of making career resources accessible to
            everyone, everywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Dedicated</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-90">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

