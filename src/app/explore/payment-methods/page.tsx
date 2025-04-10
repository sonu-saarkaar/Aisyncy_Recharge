'use client';

import React from 'react';
import Link from 'next/link';

export default function PaymentMethods() {
  const paymentMethods = [
    {
      title: "UPI",
      description: "Pay using any UPI app like Google Pay, PhonePe, Paytm",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      title: "Card Payment",
      description: "Pay using credit or debit card",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: "bg-purple-500"
    },
    {
      title: "Net Banking",
      description: "Pay directly from your bank account",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      title: "Cash on Delivery",
      description: "Pay in cash when recharging",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Payment Methods</h1>
          <p className="text-white/80 text-lg">Choose your preferred payment method</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-[#00cc44] rounded-2xl p-6">
              <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {method.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">{method.title}</h2>
              <p className="text-white/80 mb-4">{method.description}</p>
              <Link
                href="/payment"
                className="inline-block bg-white text-[#00802b] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Pay Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/explore"
            className="inline-block bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Back to Explore
          </Link>
        </div>
      </div>
    </div>
  );
} 