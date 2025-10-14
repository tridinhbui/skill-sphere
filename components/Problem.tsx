export default function Problem() {
  const triggers = [
    {
      title: "Lack of Job Opportunities",
      description:
        "Students and graduates face limited entry-level positions in today's competitive market.",
      icon: "🎯",
    },
    {
      title: "AI Domination",
      description:
        "Entry-level jobs are increasingly being replaced by AI, making it harder to break into careers.",
      icon: "🤖",
    },
    {
      title: "Unequal Distribution",
      description:
        "Gender disparities persist across various career paths, limiting opportunities for many.",
      icon: "⚖️",
    },
    {
      title: "Lack of Real-World Guidance",
      description:
        "Employment needs and career preparation strategies aren&apos;t discussed enough in education.",
      icon: "💼",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Challenge We're Addressing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Today's students and graduates face unprecedented challenges in
            entering the workforce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {triggers.map((trigger, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{trigger.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {trigger.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {trigger.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Who We&apos;re Helping</h3>
          <p className="text-lg leading-relaxed">
            High school students, undergraduates, college graduates, and
            post-grads who are looking to strengthen their resumes and increase
            their chances of finding career opportunities in an increasingly
            competitive landscape.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Sources:{" "}
            <a
              href="https://www.weforum.org/stories/2025/04/ai-jobs-international-workers-day/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              World Economic Forum
            </a>
            {" · "}
            <a
              href="https://www.cnbc.com/2025/09/07/ai-entry-level-jobs-hiring-careers.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              CNBC
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

