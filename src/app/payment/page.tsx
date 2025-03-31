'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Payment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const handlePayment = () => {
    setTimeout(() => {
      const mobileNumber = searchParams.get('mobile');
      const operator = searchParams.get('operator');
      const amount = searchParams.get('amount');
      router.push(`/success?mobile=${mobileNumber}&operator=${operator}&amount=${amount}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#00802b] flex flex-col">
      {/* Top Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="flex items-center">
          <div className="text-white text-2xl font-semibold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
            </svg>
            <span className="text-2xl">Aisyncy.recharge</span>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-[#00cc44] rounded-[30px] w-full max-w-3xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Payment Details</h1>
            <p className="text-white/90 mb-6">Choose your preferred payment method</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setSelectedMethod('upi')}
                className={`p-4 rounded-xl flex items-center ${
                  selectedMethod === 'upi' ? 'bg-white' : 'bg-white/10'
                }`}
              >
                <div className={`mr-3 ${selectedMethod === 'upi' ? 'text-[#00cc44]' : 'text-white'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className={selectedMethod === 'upi' ? 'text-black' : 'text-white'}>
                  <div className="font-medium">UPI</div>
                  <div className="text-sm opacity-70">Pay via UPI</div>
                </div>
              </button>

              <button
                onClick={() => setSelectedMethod('card')}
                className={`p-4 rounded-xl flex items-center ${
                  selectedMethod === 'card' ? 'bg-white' : 'bg-white/10'
                }`}
              >
                <div className={`mr-3 ${selectedMethod === 'card' ? 'text-[#00cc44]' : 'text-white'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className={selectedMethod === 'card' ? 'text-black' : 'text-white'}>
                  <div className="font-medium">Card</div>
                  <div className="text-sm opacity-70">Credit/Debit Card</div>
                </div>
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center text-white mb-2">
                <span>Mobile Number</span>
                <span className="font-medium">{searchParams.get('mobile')}</span>
              </div>
              <div className="flex justify-between items-center text-white mb-2">
                <span>Operator</span>
                <span className="font-medium">{searchParams.get('operator')}</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Amount</span>
                <span className="font-medium">₹{searchParams.get('amount')}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
            >
              Pay ₹{searchParams.get('amount')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#00802b] w-full">
        <div className="flex justify-between items-center text-sm text-white/70 px-8 py-2 border-t border-white/10">
          <div>© 2024 Aisyncy.recharge. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-all">Terms & Conditions</Link>
            <Link href="/recharge-policy" className="hover:text-white transition-all">Recharge Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 