export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            About Trade Pilot
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Trade Pilot is a project-based collaboration platform designed to
            connect businesses and individuals with skilled professionals for
            short-term and long-term work. Our goal is to simplify the way
            projects are posted, bids are managed, and work is delivered.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We focus on clarity, transparency, and efficiency. Buyers can post
            projects with clear budgets and timelines, while sellers can bid
            confidently knowing exactly what is expected. Every step — from
            bidding to completion — is tracked and visible.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            What We Solve
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Unclear project requirements and timelines</li>
            <li>Lack of transparency in bidding and selection</li>
            <li>Difficult communication between buyers and sellers</li>
            <li>No clear flow for project completion and delivery</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            How Trade Pilot Works
          </h2>

          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Buyers create projects with budgets and deadlines</li>
            <li>Sellers place bids with timelines and proposals</li>
            <li>Buyers select a bid and move the project forward</li>
            <li>Sellers deliver work and mark the project as completed</li>
          </ol>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            Our Vision
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our vision is to build a reliable, easy-to-use marketplace where
            collaboration feels structured and professional. Trade Pilot is
            built with scalability in mind, allowing teams and individuals to
            manage work without unnecessary complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
