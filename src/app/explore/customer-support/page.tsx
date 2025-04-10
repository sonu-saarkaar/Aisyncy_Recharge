'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CustomerSupport() {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'payment', name: 'Payment' },
    { id: 'technical', name: 'Technical' },
    { id: 'account', name: 'Account' }
  ];

  const faqs = {
    general: [
      {
        question: "How do I recharge my mobile?",
        answer: "You can recharge your mobile through our website or WhatsApp. Simply enter your mobile number, select your operator, choose a plan, and complete the payment."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery for recharges."
      },
      {
        question: "How long does it take for recharge to complete?",
        answer: "Most recharges are completed instantly. In rare cases, it may take up to 5 minutes."
      }
    ],
    payment: [
      {
        question: "What should I do if payment fails?",
        answer: "If payment fails, please check your internet connection, verify card details, and try again. If the issue persists, contact our support team."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard encryption to protect your payment information. We never store your card details."
      },
      {
        question: "Can I get a refund if recharge fails?",
        answer: "Yes, if the recharge fails after successful payment, we will process a refund within 24-48 hours."
      }
    ],
    technical: [
      {
        question: "Website is not loading properly",
        answer: "Try clearing your browser cache, using a different browser, or checking your internet connection."
      },
      {
        question: "WhatsApp bot not responding",
        answer: "Ensure you're using the correct WhatsApp number, try sending the message again, or contact us through the website."
      },
      {
        question: "Error while processing recharge",
        answer: "Please check your mobile number and operator selection. If the issue persists, contact our support team."
      }
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "Click on the 'Sign Up' button, enter your details, and verify your email/mobile number to create an account."
      },
      {
        question: "Forgot my password",
        answer: "Click on 'Forgot Password' on the login page, enter your registered email/mobile, and follow the reset instructions."
      },
      {
        question: "How to update my profile?",
        answer: "Go to your profile settings, click on 'Edit Profile', make your changes, and save them."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Customer Support</h1>
          <p className="text-white/80 text-lg">Get help with your recharge queries</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-white text-[#00802b]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-[#00cc44] rounded-2xl p-6">
          <div className="space-y-6">
            {faqs[selectedCategory as keyof typeof faqs].map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#00cc44] rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/80 mb-4">Need more help? Contact our support team</p>
            <Link
              href="tel:+1234567890"
              className="inline-block bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Support
            </Link>
          </div>
          <div className="bg-[#00cc44] rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">WhatsApp Support</h2>
            <p className="text-white/80 mb-4">Get instant help through WhatsApp</p>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              className="inline-block bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
            </Link>
          </div>
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