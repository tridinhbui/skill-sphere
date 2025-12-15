export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              SkillSphere
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering career success through free, accessible resources for
              students and graduates worldwide.
            </p>
            <p className="text-sm text-gray-400">
              A Global Solutions Senior Capstone Project
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#problem"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Solution
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.weforum.org/stories/2025/04/ai-jobs-international-workers-day/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  WEF: AI & Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnbc.com/2025/09/07/ai-entry-level-jobs-hiring-careers.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all"></span>
                  CNBC: Entry Level Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SkillSphere. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">
                Team: <span className="text-primary-400">Sohni, Phuong, Sangay, Camille, Clary</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

