'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#00802b] flex flex-col">
      {/* Top Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-2xl font-semibold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
            </svg>
            <span className="text-2xl">Aisyncy.recharge</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="bg-[#00cc44] rounded-[40px] p-12 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/90">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                • Mobile number for recharge purposes<br />
                • Payment information (processed securely through payment gateways)<br />
                • Transaction history<br />
                • Device information and IP address<br />
                • Usage data and analytics
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>
                • To process your recharge transactions<br />
                • To send transaction confirmations and receipts<br />
                • To provide customer support<br />
                • To improve our services<br />
                • To comply with legal obligations
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Data Security</h2>
              <p>
                • We use industry-standard encryption for data transmission<br />
                • Payment information is never stored on our servers<br />
                • Regular security audits are conducted<br />
                • Access to personal data is strictly controlled
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
              <p>
                • We share data only with payment gateways and telecom operators<br />
                • No data is sold to third parties<br />
                • Data sharing is limited to necessary operational purposes<br />
                • We ensure partners follow strict privacy standards
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
              <p>
                • Access your personal data<br />
                • Request data correction<br />
                • Request data deletion<br />
                • Opt-out of marketing communications<br />
                • Export your data
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies and Tracking</h2>
              <p>
                • We use cookies for essential functionality<br />
                • Analytics cookies help improve our service<br />
                • You can control cookie preferences in your browser<br />
                • Third-party cookies are used only for payment processing
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Changes to Privacy Policy</h2>
              <p>
                • We may update this policy periodically<br />
                • Users will be notified of significant changes<br />
                • Continued use implies acceptance of changes<br />
                • Previous versions are archived for reference
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
              <p>
                For privacy-related queries, contact us at:<br />
                Email: sonusaarkaar@gmail.com<br />
                Phone: 9708299494<br />
                Address: A2-Kishan Vintage, Kamalapura, Gujarat, India-391760
              </p>
            </section>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="bg-white text-[#00cc44] px-6 py-2 rounded-full text-base font-medium hover:bg-opacity-90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#00802b] py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white/70 text-sm">
              © 2024 Aisyncy.recharge. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/70 text-sm hover:text-white transition-all">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 text-sm hover:text-white transition-all">
                Terms & Conditions
              </Link>
              <Link href="/recharge-policy" className="text-white/70 text-sm hover:text-white transition-all">
                Recharge Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 