export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Trade Pilot
        </h1>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-4">
          
          {/* Intro */}
          <section className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Trade Pilot is a project-based collaboration platform designed to
              connect businesses and individuals with skilled professionals for
              short-term and long-term work. Our goal is to simplify the way
              projects are posted, bids are managed, and work is delivered.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              We focus on clarity, transparency, and efficiency. Clients can post
              projects with clear budgets and timelines, while freelancers can
              bid confidently knowing exactly what is expected. Every step —
              from bidding to completion — is tracked and visible.
            </p>
          </section>

          {/* What We Solve */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What We Solve
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Unclear project requirements and timelines</li>
              <li>Lack of transparency in bidding and selection</li>
              <li>Difficult communication between clients and freelancers</li>
              <li>No clear flow for project completion and delivery</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Trade Pilot Works
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Clients create projects with budgets and deadlines</li>
              <li>Freelancers place bids with timelines and proposals</li>
              <li>Clients select a bid and move the project forward</li>
              <li>Freelancers deliver work and mark the project as completed</li>
            </ol>
          </section>

          {/* Vision */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to build a reliable, easy-to-use marketplace where
              collaboration feels structured and professional. Trade Pilot is
              built with scalability in mind, allowing teams and individuals to
              manage work without unnecessary complexity.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
