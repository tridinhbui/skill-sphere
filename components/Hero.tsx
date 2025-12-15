export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full hover-lift">
            <p className="text-primary-600 font-semibold text-sm">
              SENIOR CAPSTONE PROJECT · GLOBAL SOLUTIONS
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Your
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Free resources for students and graduates worldwide to strengthen
            resumes, find internships, and increase career opportunities in an
            AI-driven world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#solution"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-110 shadow-lg hover:shadow-2xl animate-pulse-glow"
            >
              Explore Our Solution
            </a>
            <a
              href="#impact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all hover:scale-105 hover-lift"
            >
              See Our Impact
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift hover:border-primary-300 border border-transparent">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600">Free Resources</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift hover:border-primary-300 border border-transparent">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Global
            </div>
            <p className="text-gray-600">Access Worldwide</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift hover:border-primary-300 border border-transparent">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
              All Levels
            </div>
            <p className="text-gray-600">High School to Post-Grad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

