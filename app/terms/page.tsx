'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-4">
          <p className="text-sm text-gray-500">
            Last updated: January 2026
          </p>

          {/* Section 1 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using TradePilot, you accept and agree to be bound
              by the terms and provisions of this agreement. If you do not agree
              to these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. User Accounts
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized use</li>
              <li>One person or entity may not maintain more than one account</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. Project and Bidding Rules
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clients must provide accurate project descriptions. Freelancers
              must submit honest bids and deliver work as promised. Both parties
              agree to communicate professionally and resolve disputes in good
              faith.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All payments are processed securely through our platform. Fees are
              deducted as per our fee schedule. Refunds are handled on a
              case-by-case basis according to our refund policy.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fraudulent or deceptive practices</li>
              <li>Harassment or abusive behavior</li>
              <li>Circumventing platform fees</li>
              <li>Sharing account credentials</li>
              <li>Posting illegal or harmful content</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TradePilot is not liable for any indirect, incidental, or
              consequential damages arising from your use of the platform. Our
              liability is limited to the fees paid to us.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              7. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued
              use of the platform constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
