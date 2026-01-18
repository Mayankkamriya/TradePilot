'use client';
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-4 space-y-4">
  <p className="text-sm text-gray-500">
    Last updated: January 2026
  </p>

  {/* Section */}
  <section className="bg-gray-50 rounded-xl p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      1. Information We Collect
    </h2>
    <p className="text-gray-600 leading-relaxed">
      We collect information you provide directly to us, such as when you create
      an account, submit a project, place a bid, or contact us for support. This
      includes your name, email address, phone number, and payment information.
    </p>
  </section>

  <section className="bg-gray-50 rounded-xl p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      2. How We Use Your Information
    </h2>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      <li>To provide and maintain our services</li>
      <li>To process transactions and send related information</li>
      <li>To send promotional communications (with your consent)</li>
      <li>To respond to your comments and questions</li>
      <li>To protect against fraudulent or illegal activity</li>
    </ul>
  </section>

  <section className="bg-gray-50 rounded-xl p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      3. Information Sharing
    </h2>
    <p className="text-gray-600 leading-relaxed">
      We do not sell, trade, or rent your personal information to third parties.
      We may share your information with trusted service providers who help us
      operate and improve our platform.
    </p>
  </section>

  <section className="bg-gray-50 rounded-xl p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      4. Data Security
    </h2>
    <p className="text-gray-600 leading-relaxed">
      We implement appropriate security measures to protect your personal
      information against unauthorized access, alteration, disclosure, or
      destruction.
    </p>
  </section>

  <section className="bg-gray-50 rounded-xl p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      5. Your Rights
    </h2>
    <p className="text-gray-600 leading-relaxed">
      You have the right to access, update, or delete your personal information
      at any time. You may also opt out of receiving promotional communications.
    </p>
  </section>

  <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      6. Contact Us
    </h2>
    <p className="text-gray-700 leading-relaxed">
      If you have questions about this Privacy Policy, please contact us at{" "}
      <span className="font-semibold text-indigo-600">
        support@tradepilot.com
      </span>
      .
    </p>
  </section>
</div>

        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
