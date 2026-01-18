export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Contact Us
        </h1>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-4">
          
          {/* Intro */}
          <section className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              We’re here to help. Whether you have a question about the platform,
              need support, or want to discuss a potential collaboration, feel
              free to reach out using the details below.
            </p>
          </section>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Email */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h2>
              <p className="text-gray-700 font-medium">
                support@tradepilot.com
              </p>
              <p className="text-sm text-gray-500 mt-1">
                We usually respond within 24–48 business hours.
              </p>
            </section>

            {/* Phone */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Phone
              </h2>
              <p className="text-gray-700 font-medium">
                +91 82530 38815
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available Monday to Friday, 10 AM – 6 PM IST
              </p>
            </section>

            {/* Address */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Address
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Trade Pilot<br />
                Indore, Madhya Pradesh<br />
                India
              </p>
            </section>

            {/* Support */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Support & Queries
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For technical issues, account-related questions, or project
                disputes, please contact us via email with a clear description
                of the issue.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
