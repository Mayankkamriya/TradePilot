'use client';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Cookie Policy
        </h1>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-10">
          
          {/* Meta */}
          <p className="text-sm text-gray-500">
            Last updated: January 2026
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. What Are Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide information to
              website owners.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. How We Use Cookies
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our site
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Authentication Cookies:</strong> Keep you logged in
                during your session
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some cookies on our website are set by third parties, such as
              analytics providers and payment processors. We do not control
              these cookies, and you should refer to the respective third-party
              privacy policies for more information.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Managing Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can control and manage cookies through your browser settings.
              Please note that removing or blocking cookies may impact your user
              experience and some features may not function properly.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Cookie Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Session cookies are deleted when you close your browser.
              Persistent cookies remain on your device for a set period or until
              you delete them manually.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Updates to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about our use of cookies, please contact us
              at <span className="font-medium">support@tradepilot.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
