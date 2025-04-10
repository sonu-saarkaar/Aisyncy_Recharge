'use client';

import React from 'react';
import Link from 'next/link';

export default function WhatsAppIssues() {
  const issues = [
    {
      title: "Recharge Not Working",
      description: "If your recharge is not being processed through WhatsApp",
      solutions: [
        "Check your internet connection",
        "Verify your mobile number",
        "Ensure sufficient balance",
        "Try clearing WhatsApp cache"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-red-500"
    },
    {
      title: "Payment Failed",
      description: "If your payment is failing during recharge",
      solutions: [
        "Check your payment method",
        "Verify card details",
        "Ensure sufficient balance",
        "Try a different payment method"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-yellow-500"
    },
    {
      title: "Wrong Amount",
      description: "If you're seeing incorrect recharge amount",
      solutions: [
        "Double-check the plan details",
        "Verify operator selection",
        "Check for any discounts",
        "Contact customer support"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      title: "No Response",
      description: "If WhatsApp bot is not responding",
      solutions: [
        "Check your internet connection",
        "Try sending message again",
        "Clear WhatsApp cache",
        "Contact support through website"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">WhatsApp Recharge Issues</h1>
          <p className="text-white/80 text-lg">Find solutions to common WhatsApp recharge problems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="bg-[#00cc44] rounded-2xl p-6">
              <div className={`${issue.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {issue.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">{issue.title}</h2>
              <p className="text-white/80 mb-4">{issue.description}</p>
              <div className="space-y-2">
                {issue.solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-center text-white/80">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {solution}
                  </div>
                ))}
              </div>
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