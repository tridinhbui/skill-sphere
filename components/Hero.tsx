export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full">
            <p className="text-primary-600 font-semibold text-sm">
              SENIOR CAPSTONE PROJECT · GLOBAL SOLUTIONS
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Your
            <br />
            <span className="text-primary-600">Career Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Free resources for students and graduates worldwide to strengthen
            resumes, find internships, and increase career opportunities in an
            AI-driven world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#solution"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
            >
              Explore Our Solution
            </a>
            <a
              href="#impact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              See Our Impact
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              100%
            </div>
            <p className="text-gray-600">Free Resources</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              Global
            </div>
            <p className="text-gray-600">Access Worldwide</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              All Levels
            </div>
            <p className="text-gray-600">High School to Post-Grad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

