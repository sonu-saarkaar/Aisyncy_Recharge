'use client';

import React from 'react';
import Link from 'next/link';

export default function Terms() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-white/90">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Aisyncy.recharge, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
              <p>
                • We provide mobile recharge services for various telecom operators<br />
                • Services are available 24/7 subject to system availability<br />
                • We act as an authorized recharge partner<br />
                • All recharges are processed in real-time
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h2>
              <p>
                • Provide accurate mobile number and operator details<br />
                • Ensure sufficient balance for payment<br />
                • Keep transaction details confidential<br />
                • Report any issues within 24 hours of transaction
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Payment Terms</h2>
              <p>
                • All payments must be made in Indian Rupees (INR)<br />
                • Payment is required before processing recharge<br />
                • We accept all major payment methods<br />
                • Transaction charges are borne by the user
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Service Limitations</h2>
              <p>
                • Minimum recharge amount: ₹10<br />
                • Maximum recharge amount: ₹10,000 per transaction<br />
                • Service availability depends on operator systems<br />
                • We reserve the right to refuse service
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
              <p>
                • All content on our website is protected by copyright<br />
                • Aisyncy.recharge logo and branding are our property<br />
                • Unauthorized use is strictly prohibited<br />
                • Users may not copy or reproduce our content
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                • We are not liable for operator-specific issues<br />
                • Maximum liability limited to recharge amount<br />
                • No responsibility for network problems<br />
                • Not liable for indirect or consequential damages
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
              <p>
                • We may modify these terms at any time<br />
                • Users will be notified of significant changes<br />
                • Continued use implies acceptance of changes<br />
                • Previous versions are archived for reference
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
              <p>
                • These terms are governed by Indian law<br />
                • Any disputes will be subject to Indian courts<br />
                • Users agree to exclusive jurisdiction<br />
                • Severability clause applies
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact Information</h2>
              <p>
                For any queries regarding these terms, contact us at:<br />
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