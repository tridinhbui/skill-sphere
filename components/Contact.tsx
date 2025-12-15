"use client";

import { useState } from "react";

export default function Contact() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sohni Singh",
      role: "Research and Website Content",
      contacts: {
        instagram: "_sohnisingh",
        linkedin: "Sohni Singh",
        email: "sohnisingh2020@gmail.com",
      },
      description:
        "Conducted extensive research on career industries, pathways, and skills. Health-conscious and brings attention to wellbeing and sustainability.",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sangay Yangdon Wangdi",
      role: "Research and Social Media Content",
      contacts: {
        instagram: null,
        linkedin: null,
        email: null,
      },
      description:
        "Helped with visual design and contributed to research and data collection, supporting our platform with valuable insights.",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Camille",
      role: "Designing & Marketing",
      contacts: {
        instagram: null,
        linkedin: "Lingjun Jiang",
        email: "26jianca@eaaschool.org",
      },
      description:
        "Focused on maintaining budget and conducting extensive marketing research to make the platform accessible and appealing.",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Clary",
      role: "Design & Information Researcher",
      contacts: {
        instagram: null,
        linkedin: null,
        email: "linglu0310@gmail.com",
      },
      description:
        "Focuses on information research and contributes to platform design, ensuring clarity, usability, and intuitive user experience.",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Phuong Nguyen",
      role: "Finance Management & Public Relations",
      contacts: {
        instagram: null,
        linkedin: "Phuong Nguyen",
        email: "pnguyencollege214@gmail.com",
      },
      description:
        "Manages finance and public relations, secures resources, and connects SkillSphere with partners and supporters for mentorship.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Contact Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the passionate individuals behind SkillSphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-300 hover:-translate-y-2"
            >
              <div
                className={`bg-gradient-to-r ${member.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-center opacity-90">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-2">
                  {member.contacts.email && (
                    <a
                      href={`mailto:${member.contacts.email}`}
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors group/item"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-primary-600 group-hover/item:scale-110 transition-transform"
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
                      <span className="truncate">{member.contacts.email}</span>
                    </a>
                  )}
                  {member.contacts.linkedin && (
                    <div className="flex items-center text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 mr-2 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>{member.contacts.linkedin}</span>
                    </div>
                  )}
                  {member.contacts.instagram && (
                    <div className="flex items-center text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 mr-2 text-primary-600"
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
            </div>
          ))}
        </div>

        {/* Compact Team Introduction */}
        <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Team Introduction</h3>
            <p className="text-primary-50 mb-6 max-w-2xl mx-auto">
              A diverse team of passionate students from Maharishi School, united
              by our shared vision of making career resources accessible to
              everyone, everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
                <div className="text-xl font-bold">5</div>
                <div className="text-xs opacity-90">Team Members</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
                <div className="text-xl font-bold">100%</div>
                <div className="text-xs opacity-90">Dedicated</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
                <div className="text-xl font-bold">∞</div>
                <div className="text-xs opacity-90">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
