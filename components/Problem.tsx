export default function Problem() {
  const problems = [
    {
      title: "Lack of Job Opportunities",
      description:
        "Finding a job after graduation has become really difficult. There's a lot of competition for the few entry-level positions that are available. Because of economic uncertainty and rapid technological change, many companies have reduced hiring for beginner roles. As a result, students often face a &quot;bottleneck&quot; when starting their careers. Compared to ten years ago, fewer organizations offer paid internships or training opportunities, which leaves many students relying on unpaid work or missing out on valuable experience altogether.",
      icon: "🎯",
      stats: "Joblessness surges for youngest US workers as firms slow entry-level hiring",
    },
    {
      title: "AI Domination",
      description:
        "Artificial intelligence is changing the job market in a big way. According to reports from the World Economic Forum and other major organizations, millions of jobs, especially entry-level ones, could be replaced by AI. Many of the simple, repetitive tasks that new employees usually do are now handled by machines. Therefore, this makes it harder for young people to gain experience in traditional jobs. At the same time, AI also creates new kinds of opportunities, but they require strong digital skills and the ability to adapt quickly.",
      icon: "🤖",
      stats: "AI can already replace nearly 12% of jobs, with entry-level positions most at risk",
    },
    {
      title: "Unequal Distribution",
      description:
        "Gender inequality in the workplace is still a major issue. Even though more women are earning higher degrees and working in professional fields, men are still more common in leadership roles and better-paying industries. On average, women earn about 84–85% of what men earn. Moreover, there are big differences when it comes to promotions. Only 22% of women reported getting promoted compared to 34% of men in 2024. This shows that there's still a long way to go before equality is fully achieved.",
      icon: "⚖️",
      stats: "Women earn 84-85% of what men earn; only 22% of women get promoted vs 34% of men",
    },
    {
      title: "Lack of Real-World Guidance",
      description:
        "Many schools and universities don't properly prepare students for the real world of work. Career preparation is often limited, and students don't always learn practical things like how to write resumes, perform well in interviews, or network effectively. Because of this, many graduates enter the job market unsure of what employers are looking for especially in fast-changing industries shaped by AI.",
      icon: "💼",
      stats: "College graduates struggle to find jobs as AI reshapes entry-level requirements",
    },
  ];

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(14, 165, 233) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Challenges
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              The Challenge We&apos;re Addressing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Today&apos;s students and graduates face unprecedented challenges in
            entering the workforce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {problem.title}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold mb-3">
                      {problem.stats}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {problem.description}
                </p>
              </div>
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

        <div className="mt-12 bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            References
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <a
              href="https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/5/joblessness-surges-for-youngest-us-workers-as-firms-slow-entrylevel-hiring-89225818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>S&P Global: Joblessness surges for youngest US workers</span>
            </a>
            <a
              href="https://www.shrm.org/topics-tools/news/talent-acquisition/youth-employment-falls-summer-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>SHRM: Youth employment falls summer 2025</span>
            </a>
            <a
              href="https://www.cnbc.com/2025/11/23/college-graduates-are-struggling-to-find-jobs-ai-is-partly-to-blame.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>CNBC: College graduates struggling to find jobs</span>
            </a>
            <a
              href="https://www.linkedin.com/posts/paolomaresca_why-ai-is-replacing-some-jobs-faster-than-activity-7371079798615339010-flIE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>LinkedIn: Why AI is replacing some jobs faster</span>
            </a>
            <a
              href="https://www.forbes.com/sites/hessiejones/2025/11/24/ai-is-not-killing-entry-level-jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>Forbes: AI is not killing entry-level jobs</span>
            </a>
            <a
              href="https://www.cnbc.com/2025/11/20/why-ai-may-kill-career-advancement-for-many-young-workers.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>CNBC: Why AI may kill career advancement</span>
            </a>
            <a
              href="https://www.epi.org/blog/gender-pay-gap-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>EPI: Gender pay gap 2024</span>
            </a>
            <a
              href="https://www.pewresearch.org/short-reads/2025/03/04/gender-pay-gap-in-us-has-narrowed-slightly-over-2-decades/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>Pew Research: Gender pay gap narrowed slightly</span>
            </a>
            <a
              href="https://www.reddit.com/r/Economics/comments/1pa5syw/mit_report_ai_can_already_replace_nearly_12_of/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>MIT Report: AI can replace nearly 12% of jobs</span>
            </a>
            <a
              href="https://www.aauw.org/resources/news/media/press-releases/2024-gender-pay-gap-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 hover:underline flex items-start"
            >
              <span className="mr-2">•</span>
              <span>AAUW: 2024 gender pay gap data</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

