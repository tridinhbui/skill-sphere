export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
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

