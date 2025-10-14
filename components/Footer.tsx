export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SkillSphere</h3>
            <p className="text-gray-400 mb-4">
              Empowering career success through free, accessible resources for
              students and graduates worldwide.
            </p>
            <p className="text-sm text-gray-500">
              A Global Solutions Senior Capstone Project
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solution
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.weforum.org/stories/2025/04/ai-jobs-international-workers-day/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WEF: AI & Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnbc.com/2025/09/07/ai-entry-level-jobs-hiring-careers.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CNBC: Entry Level Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SkillSphere. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <p className="text-gray-400 text-sm">
                Team: Sohni, Phuong, Sangay, Camille, Clary
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

