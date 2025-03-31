'use client';

import React from 'react';
import Link from 'next/link';

export default function RechargePolicy() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Recharge Policy</h1>
          
          <div className="space-y-6 text-white/90">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Service Availability</h2>
              <p>
                Our recharge services are available 24/7 for all major telecom operators in India. 
                We process recharges instantly, subject to network availability and operator systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Transaction Processing</h2>
              <p>
                • All transactions are processed in real-time.<br />
                • The recharge amount will be credited to your account immediately after successful payment.<br />
                • In case of any delay, please wait for 5-10 minutes before contacting support.<br />
                • Keep the transaction ID safe for future reference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Payment Terms</h2>
              <p>
                • We accept all major payment methods including UPI, cards, and net banking.<br />
                • All payments are processed through secure payment gateways.<br />
                • The amount charged will be exactly as shown during checkout.<br />
                • No additional charges are levied except the recharge amount.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Operator Terms</h2>
              <p>
                • We are an authorized recharge partner for all major operators.<br />
                • Operator-specific terms and conditions apply as per their policies.<br />
                • Validity and benefits of recharge plans are as per operator's terms.<br />
                • We are not responsible for operator-specific issues or network problems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Customer Support</h2>
              <p>
                • Our support team is available 24/7 to assist you.<br />
                • For any issues, please contact us with your transaction ID.<br />
                • Response time is within 30 minutes during business hours.<br />
                • Support is available in English and Hindi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Security</h2>
              <p>
                • All transactions are encrypted and secure.<br />
                • We never store your payment details.<br />
                • Your mobile number is only used for recharge purposes.<br />
                • We follow strict security protocols to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                • We are not liable for operator-specific issues.<br />
                • We are not responsible for network problems or service disruptions.<br />
                • Our liability is limited to the recharge amount paid.<br />
                • We are not liable for any indirect or consequential damages.
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