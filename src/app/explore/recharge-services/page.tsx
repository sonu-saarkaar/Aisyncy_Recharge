'use client';

import React from 'react';
import Link from 'next/link';

export default function RechargeServices() {
  const services = [
    {
      title: "Mobile Recharge",
      description: "Quick and easy recharge for all mobile operators",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      title: "DTH Recharge",
      description: "Recharge your DTH connection instantly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-purple-500"
    },
    {
      title: "Broadband",
      description: "Pay your broadband bills online",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      title: "Electricity Bill",
      description: "Pay your electricity bills instantly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-yellow-500"
    },
    {
      title: "Gas Bill",
      description: "Pay your gas bills online",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "bg-red-500"
    },
    {
      title: "Water Bill",
      description: "Pay your water bills instantly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Recharge Services</h1>
          <p className="text-white/80 text-lg">Choose from our wide range of recharge services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/payment?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-[#00cc44] rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">{service.title}</h2>
              <p className="text-white/80">{service.description}</p>
            </Link>
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